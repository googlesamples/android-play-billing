"use strict";
// Copyright 2018 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRetryConfig = void 0;
async function getRetryConfig(err) {
    let config = getConfig(err);
    if (!err || !err.config || (!config && !err.config.retry)) {
        return { shouldRetry: false };
    }
    config = config || {};
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    config.retry =
        config.retry === undefined || config.retry === null ? 3 : config.retry;
    config.httpMethodsToRetry = config.httpMethodsToRetry || [
        'GET',
        'HEAD',
        'PUT',
        'OPTIONS',
        'DELETE',
    ];
    config.noResponseRetries =
        config.noResponseRetries === undefined || config.noResponseRetries === null
            ? 2
            : config.noResponseRetries;
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    const retryRanges = [
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        // 1xx - Retry (Informational, request still processing)
        // 2xx - Do not retry (Success)
        // 3xx - Do not retry (Redirect)
        // 4xx - Do not retry (Client errors)
        // 429 - Retry ("Too Many Requests")
        // 5xx - Retry (Server errors)
        [100, 199],
        [429, 429],
        [500, 599],
    ];
    config.statusCodesToRetry = config.statusCodesToRetry || retryRanges;
    // Put the config back into the err
    err.config.retryConfig = config;
    // Determine if we should retry the request
    const shouldRetryFn = config.shouldRetry || shouldRetryRequest;
    if (!(await shouldRetryFn(err))) {
        return { shouldRetry: false, config: err.config };
    }
    // Calculate time to wait with exponential backoff.
    // Formula: (2^c - 1 / 2) * 1000
    const delay = ((Math.pow(2, config.currentRetryAttempt) - 1) / 2) * 1000;
    // We're going to retry!  Incremenent the counter.
    err.config.retryConfig.currentRetryAttempt += 1;
    // Create a promise that invokes the retry after the backOffDelay
    const backoff = new Promise(resolve => {
        setTimeout(resolve, delay);
    });
    // Notify the user if they added an `onRetryAttempt` handler
    if (config.onRetryAttempt) {
        config.onRetryAttempt(err);
    }
    // Return the promise in which recalls Gaxios to retry the request
    await backoff;
    return { shouldRetry: true, config: err.config };
}
exports.getRetryConfig = getRetryConfig;
/**
 * Determine based on config if we should retry the request.
 * @param err The GaxiosError passed to the interceptor.
 */
function shouldRetryRequest(err) {
    const config = getConfig(err);
    // node-fetch raises an AbortError if signaled:
    // https://github.com/bitinn/node-fetch#request-cancellation-with-abortsignal
    if (err.name === 'AbortError') {
        return false;
    }
    // If there's no config, or retries are disabled, return.
    if (!config || config.retry === 0) {
        return false;
    }
    // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)
    if (!err.response &&
        (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
        return false;
    }
    // Only retry with configured HttpMethods.
    if (!err.config.method ||
        config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
        return false;
    }
    // If this wasn't in the list of status codes where we want
    // to automatically retry, return.
    if (err.response && err.response.status) {
        let isInRange = false;
        for (const [min, max] of config.statusCodesToRetry) {
            const status = err.response.status;
            if (status >= min && status <= max) {
                isInRange = true;
                break;
            }
        }
        if (!isInRange) {
            return false;
        }
    }
    // If we are out of retry attempts, return
    config.currentRetryAttempt = config.currentRetryAttempt || 0;
    if (config.currentRetryAttempt >= config.retry) {
        return false;
    }
    return true;
}
/**
 * Acquire the raxConfig object from an GaxiosError if available.
 * @param err The Gaxios error with a config object.
 */
function getConfig(err) {
    if (err && err.config && err.config.retryConfig) {
        return err.config.retryConfig;
    }
    return;
}
//# sourceMappingURL=retry.js.map