/*
 * Copyright 2019 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.subscriptions.ui

import android.arch.lifecycle.Observer
import android.arch.lifecycle.ViewModelProviders
import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.support.v17.leanback.app.BackgroundManager
import android.support.v17.leanback.app.DetailsSupportFragment
import android.support.v17.leanback.widget.Action
import android.support.v17.leanback.widget.ArrayObjectAdapter
import android.support.v17.leanback.widget.ClassPresenterSelector
import android.support.v17.leanback.widget.DetailsOverviewRow
import android.support.v17.leanback.widget.FullWidthDetailsOverviewRowPresenter
import android.support.v17.leanback.widget.SparseArrayObjectAdapter
import android.support.v4.app.Fragment
import android.support.v4.content.ContextCompat
import android.util.DisplayMetrics
import android.util.Log
import android.view.Gravity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.FrameLayout
import android.widget.ProgressBar
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.SimpleTarget
import com.bumptech.glide.request.transition.Transition
import com.example.subscriptions.R
import com.example.subscriptions.billing.isAccountHold
import com.example.subscriptions.billing.isBasicContent
import com.example.subscriptions.billing.isGracePeriod
import com.example.subscriptions.billing.isPremiumContent
import com.example.subscriptions.billing.isSubscriptionRestore
import com.example.subscriptions.billing.isTransferRequired
import com.example.subscriptions.data.ContentResource
import com.example.subscriptions.data.SubscriptionContent
import com.example.subscriptions.data.SubscriptionStatus
import com.example.subscriptions.presenter.SubscriptionDetailsPresenter
import com.example.subscriptions.utils.basicTextForSubscription
import com.example.subscriptions.utils.premiumTextForSubscription
import com.google.firebase.auth.FirebaseUser

/**
 * TvMainFragment implements DetailsSupportFragment to provide an Android TV optimized experience to the user.
 * The class creates a Presenter and adds a DetailsOverviewRow Leanback widget used to display metadata from
 * a SubscriptionContent object.
 *
 *
 * This Activity subscribes to LiveData updates observed by its parent Activity in order to update the content
 * available.
 */
class TvMainFragment : DetailsSupportFragment() {

    companion object {

        private const val ACTION_SUBSCRIBE_BASIC = 1
        private const val ACTION_SUBSCRIBE_PREMIUM = 2
        private const val ACTION_MANAGE_SUBSCRIPTIONS = 3
        private const val ACTION_SIGN_IN_OUT = 4

        private const val TAG = "TvMainFragment"
    }

    private lateinit var metrics: DisplayMetrics
    private lateinit var presenterSelector: ClassPresenterSelector
    private lateinit var objectAdapter: ArrayObjectAdapter
    private lateinit var subscriptionContent: SubscriptionContent
    private lateinit var backgroundManager: BackgroundManager
    private lateinit var detailsOverviewRow: DetailsOverviewRow

    private lateinit var authenticationViewModel: FirebaseUserViewModel
    private lateinit var subscriptionsStatusViewModel: SubscriptionStatusViewModel
    private lateinit var billingViewModel: BillingViewModel

    private var basicSubscription: SubscriptionStatus? = null
    private var premiumSubscription: SubscriptionStatus? = null

    private lateinit var spinnerFragment: SpinnerFragment

    /**
     * Lifecycle call onCreate()
     */
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        prepareBackgroundManager()
    }

    /**
     * Lifecycle call onActivityCreated()
     */
    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)

        // Creates default SubscriptionContent object
        createSubscriptionContent()

        authenticationViewModel = ViewModelProviders.of(requireActivity()).get(FirebaseUserViewModel::class.java)
        subscriptionsStatusViewModel = ViewModelProviders.of(requireActivity()).get(SubscriptionStatusViewModel::class.java)
        billingViewModel = ViewModelProviders.of(requireActivity()).get(BillingViewModel::class.java)
        spinnerFragment = SpinnerFragment()

        // Update the UI whenever a user signs in / out
        authenticationViewModel.firebaseUser.observe(requireActivity(), Observer<FirebaseUser> {
            Log.d(TAG, "firebaseUser onChange()")
            refreshUI()
        })

        // Show or hide a Spinner based on loading state
        subscriptionsStatusViewModel.loading.observe(requireActivity(), Observer<Boolean> { it ->
            it?.let {
                Log.d(TAG, "firebaseUser onChange()")
                if (it) {
                    fragmentManager?.let { manager ->
                        manager.beginTransaction().replace(R.id.main_frame, spinnerFragment).commit()
                    }
                } else {
                    fragmentManager?.let { manager ->
                        manager.beginTransaction().remove(spinnerFragment).commit()
                    }
                }
            }
        })

        // Updates subscription image for Basic plan
        subscriptionsStatusViewModel.basicContent.observe(requireActivity(), Observer<ContentResource> { it ->
            it?.let {
                Log.d(TAG, "basicContent onChange()")
                if (it?.url != null) {
                    // If a premium subscription exists, don't update image with basic plan
                    if (premiumSubscription == null) {
                        updateSubscriptionImage(it.url)
                    }
                }
            }
        })

        // Updates subscription image for Premium plan
        subscriptionsStatusViewModel.premiumContent.observe(requireActivity(), Observer<ContentResource> { it ->
            it?.let {
                Log.d(TAG, "premiumContent onChange()")
                if (it?.url != null) {
                    updateSubscriptionImage(it.url)
                }
            }
        })

        // Updates subscription details based on list of available subscriptions
        subscriptionsStatusViewModel.subscriptions.observe(requireActivity(), Observer<List<SubscriptionStatus>> {
            Log.d(TAG, "subscriptions onChange()")
            updateSubscriptionDetails(it)
        })

    }

    /**
     * Lifecycle call onResume()
     */
    override fun onResume() {
        super.onResume()
        updateBackground()
    }

    /**
     * Lifecycle call onPause()
     */
    override fun onPause() {
        backgroundManager.release()
        super.onPause()
    }

    /**
     * Creates a SubscriptionContent object used for populating information about a Subscription.
     */
    private fun createSubscriptionContent() {
        subscriptionContent = SubscriptionContent.Builder()
            .title(getString(R.string.app_name))
            .subtitle(getString(R.string.paywall_message))
            .build()
    }

    /**
     * Prepares BackgroundManager class used for updating the backdrop image.
     */
    private fun prepareBackgroundManager() {
        backgroundManager = BackgroundManager.getInstance(requireActivity())
        backgroundManager.attach(requireActivity().window)
        metrics = DisplayMetrics()
        requireActivity().windowManager.defaultDisplay.getMetrics(metrics)
    }

    /**
     * Updates the background image used as backdrop.
     */
    private fun updateBackground() {
        val options = RequestOptions()
            .fitCenter()
            .dontAnimate()

        Glide.with(this)
            .asBitmap()
            .load(R.drawable.tv_background_img)
            .apply(options)
            .into(object : SimpleTarget<Bitmap>(metrics.widthPixels, metrics.heightPixels) {
                override fun onResourceReady(
                    resource: Bitmap,
                    transition: Transition<in Bitmap>) {
                    backgroundManager.setBitmap(resource)
                }
            })
    }

    /**
     * Updates Subscription details based on the provided list of subscriptions retrieved from the server
     */
    private fun updateSubscriptionDetails(subscriptionStatuses: List<SubscriptionStatus>?) {

        // Clear out any previously cached subscriptions
        basicSubscription = null
        premiumSubscription = null

        // Create new SubscriptionContent builder and populate with metadata from SubscriptionStatus list
        val subscriptionContentBuilder = SubscriptionContent.Builder()
        subscriptionContentBuilder.title(getString(R.string.app_name))

        if (subscriptionStatuses != null && !subscriptionStatuses.isEmpty()) {

            Log.d(TAG, "We have subscriptions!")

            // Iterate through the list of subscriptions to build our SubscriptionContent object
            for (subscription in subscriptionStatuses) {

                // Basic Plan
                if (isBasicContent(subscription)) {
                    Log.d(TAG, "basic subscription found")

                    // Update our builder object
                    subscriptionContentBuilder.subtitle(getString(R.string.basic_message))
                    subscriptionContentBuilder.description(getString(R.string.basic_content_text))

                    // Cache the subscription in a global member variable
                    basicSubscription = subscription
                }

                // Premium Plan
                if (isPremiumContent(subscription)) {
                    Log.d(TAG, "premium subscription found")

                    // Update our builder object
                    subscriptionContentBuilder.subtitle(getString(R.string.premium_message))
                    subscriptionContentBuilder.description(getString(R.string.premium_content_text))

                    // Cache the subscription in a global member variable
                    premiumSubscription = subscription
                }

                // Subscription restore
                if (isSubscriptionRestore(subscription)) {
                    Log.d(TAG, "subscription restore")
                    val expiryDate = getHumanReadableDate(subscription.activeUntilMillisec)
                    val subtitleText = getString(R.string.restore_message_with_date, expiryDate)
                    subscriptionContentBuilder.subtitle(subtitleText)
                    subscriptionContentBuilder.description(null)
                }

                // Account in grace period
                if (isGracePeriod(subscription)) {
                    Log.d(TAG, "account in grace period")

                    subscriptionContentBuilder.subtitle(getString(R.string.grace_period_message))
                    subscriptionContentBuilder.description(null)
                }

                // Account transfer
                if (isTransferRequired(subscription)) {
                    Log.d(TAG, "account transfer required")

                    subscriptionContentBuilder.subtitle(getString(R.string.transfer_message))
                    subscriptionContentBuilder.description(null)
                }

                // Account on hold
                if (isAccountHold(subscription)) {
                    Log.d(TAG, "account on hold")

                    subscriptionContentBuilder.subtitle(getString(R.string.account_hold_message))
                    subscriptionContentBuilder.description(null)
                }
            }

        } else {
            // Default message to display when there are no subscriptions available
            subscriptionContentBuilder.subtitle(getString(R.string.paywall_message))
        }

        // Refresh the UI
        refreshUI()
        detailsOverviewRow.item = subscriptionContentBuilder.build()

    }

    /**
     * Updates DetailOverviewRow's image using the provided URL.
     */
    private fun updateSubscriptionImage(url: String) {

        val options = RequestOptions()
            .fitCenter()
            .dontAnimate()

        Glide.with(requireActivity())
            .asBitmap()
            .load(url)
            .apply(options)
            .into(object : SimpleTarget<Bitmap>() {
                override fun onResourceReady(
                    resource: Bitmap,
                    transition: Transition<in Bitmap>) {
                    detailsOverviewRow.setImageBitmap(requireActivity(), resource)
                }
            })
    }

    /**
     * Creates a ClassPresenterSelector, adds a styled FullWidthDetailsOverviewRowPresenter with
     * an OnActionClickedListener to handle click events for the available Actions.
     */
    private fun setupAdapter() {
        // Set detail background and style.
        val detailsPresenter = FullWidthDetailsOverviewRowPresenter(SubscriptionDetailsPresenter())

        detailsPresenter.backgroundColor = ContextCompat.getColor(requireActivity(), R.color.primaryColor)
        detailsPresenter.initialState = FullWidthDetailsOverviewRowPresenter.STATE_SMALL
        detailsPresenter.alignmentMode = FullWidthDetailsOverviewRowPresenter.ALIGN_MODE_MIDDLE

        // Set OnActionClickListener to handle Action click events
        detailsPresenter.setOnActionClickedListener { action ->

            if (action.id == ACTION_SUBSCRIBE_BASIC.toLong()) {

                // Subscribe to basic plan
                billingViewModel.buyBasic()

            } else if (action.id == ACTION_SUBSCRIBE_PREMIUM.toLong()) {

                // If a basic subscription exists, handle as an upgrade to premium
                // else, handle as a new subscription to premium
                if (basicSubscription != null) {
                    billingViewModel.buyUpgrade()
                } else {
                    billingViewModel.buyPremium()
                }

            } else if (action.id == ACTION_MANAGE_SUBSCRIPTIONS.toLong()) {
                // Launch Activity to manage subscriptions
                startActivity(Intent(requireActivity(), TvManageSubscriptionsActivity::class.java))
            } else if (action.id == ACTION_SIGN_IN_OUT.toLong()) {

                // Handle sign-in / sign-out event based on current state
                if (authenticationViewModel.isSignedIn()) {
                    (requireActivity() as TvMainActivity).triggerSignOut()
                } else {
                    (requireActivity() as TvMainActivity).triggerSignIn()
                }
            }

        }

        // Create ClassPresenter, add the DetailsPresenter and bind to its adapter
        presenterSelector = ClassPresenterSelector()
        presenterSelector.addClassPresenter(DetailsOverviewRow::class.java, detailsPresenter)
        objectAdapter = ArrayObjectAdapter(presenterSelector)
        adapter = objectAdapter
    }

    /**
     * Creates a DetailsOverviewRow and adds Action buttons to the layout
     */
    private fun setupDetailsOverviewRow() {

        // Create DetailsOverviewRow widget
        detailsOverviewRow = DetailsOverviewRow(subscriptionContent)

        // Create Action Adapter
        val actionAdapter = SparseArrayObjectAdapter()

        // Add Basic Plan Action button
        actionAdapter.set(ACTION_SUBSCRIBE_BASIC, Action(ACTION_SUBSCRIBE_BASIC.toLong(),
            if (basicSubscription != null)
                basicTextForSubscription(resources, basicSubscription!!)
            else
                resources.getString(R.string.subscription_option_basic_message)))

        // Add Premium Plan Action button
        actionAdapter.set(ACTION_SUBSCRIBE_PREMIUM, Action(ACTION_SUBSCRIBE_PREMIUM.toLong(),
            if (premiumSubscription != null)
                premiumTextForSubscription(resources, premiumSubscription!!)
            else
                resources.getString(R.string.subscription_option_premium_message)))

        // Add Manage Subscriptions Action button
        actionAdapter.set(ACTION_MANAGE_SUBSCRIPTIONS, Action(ACTION_MANAGE_SUBSCRIPTIONS.toLong(),
            resources.getString(R.string.manage_subscription_label)))

        // Add Sign in / out Action button
        actionAdapter.set(ACTION_SIGN_IN_OUT, Action(ACTION_SIGN_IN_OUT.toLong(),
            if (authenticationViewModel.isSignedIn())
                getString(R.string.sign_out)
            else
                getString(R.string.sign_in)))

        // Set Action Adapter and add DetailsOverviewRow to Presenter class
        detailsOverviewRow.actionsAdapter = actionAdapter
        objectAdapter.add(detailsOverviewRow)
    }

    /**
     * Refreshes the UI
     */
    private fun refreshUI() {
        setupAdapter()
        setupDetailsOverviewRow()
    }

    /**
     * Custom Fragment used for displaying a Spinner during long running tasks (e.g. network requests)
     */
    class SpinnerFragment : Fragment() {
        override fun onCreateView(
            inflater: LayoutInflater,
            container: ViewGroup?,
            savedInstanceState: Bundle?
        ) : View {
            val progressBar = ProgressBar(container?.context)
            if (container is FrameLayout) {
                val res = resources
                val width = res.getDimensionPixelSize(R.dimen.spinner_width)
                val height = res.getDimensionPixelSize(R.dimen.spinner_height)
                val layoutParams = FrameLayout.LayoutParams(width, height, Gravity.CENTER)
                progressBar.layoutParams = layoutParams
            }

            return progressBar
        }
    }
}