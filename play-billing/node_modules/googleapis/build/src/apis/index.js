"use strict";
// Copyright 2020 Google LLC
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
/*! THIS FILE IS AUTO-GENERATED */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAPIs = exports.APIS = void 0;
const abusiveexperiencereport = require("./abusiveexperiencereport");
const acceleratedmobilepageurl = require("./acceleratedmobilepageurl");
const accessapproval = require("./accessapproval");
const accesscontextmanager = require("./accesscontextmanager");
const adexchangebuyer = require("./adexchangebuyer");
const adexchangebuyer2 = require("./adexchangebuyer2");
const adexperiencereport = require("./adexperiencereport");
const admin = require("./admin");
const admob = require("./admob");
const adsense = require("./adsense");
const adsensehost = require("./adsensehost");
const alertcenter = require("./alertcenter");
const analytics = require("./analytics");
const analyticsreporting = require("./analyticsreporting");
const androiddeviceprovisioning = require("./androiddeviceprovisioning");
const androidenterprise = require("./androidenterprise");
const androidmanagement = require("./androidmanagement");
const androidpublisher = require("./androidpublisher");
const appengine = require("./appengine");
const appsactivity = require("./appsactivity");
const artifactregistry = require("./artifactregistry");
const bigquery = require("./bigquery");
const bigqueryconnection = require("./bigqueryconnection");
const bigquerydatatransfer = require("./bigquerydatatransfer");
const bigqueryreservation = require("./bigqueryreservation");
const bigtableadmin = require("./bigtableadmin");
const billingbudgets = require("./billingbudgets");
const binaryauthorization = require("./binaryauthorization");
const blogger = require("./blogger");
const books = require("./books");
const calendar = require("./calendar");
const chat = require("./chat");
const chromeuxreport = require("./chromeuxreport");
const civicinfo = require("./civicinfo");
const classroom = require("./classroom");
const cloudasset = require("./cloudasset");
const cloudbilling = require("./cloudbilling");
const cloudbuild = require("./cloudbuild");
const clouddebugger = require("./clouddebugger");
const clouderrorreporting = require("./clouderrorreporting");
const cloudfunctions = require("./cloudfunctions");
const cloudidentity = require("./cloudidentity");
const cloudiot = require("./cloudiot");
const cloudkms = require("./cloudkms");
const cloudprofiler = require("./cloudprofiler");
const cloudresourcemanager = require("./cloudresourcemanager");
const cloudscheduler = require("./cloudscheduler");
const cloudsearch = require("./cloudsearch");
const cloudshell = require("./cloudshell");
const cloudtasks = require("./cloudtasks");
const cloudtrace = require("./cloudtrace");
const composer = require("./composer");
const compute = require("./compute");
const container = require("./container");
const containeranalysis = require("./containeranalysis");
const content = require("./content");
const customsearch = require("./customsearch");
const datacatalog = require("./datacatalog");
const dataflow = require("./dataflow");
const datafusion = require("./datafusion");
const dataproc = require("./dataproc");
const datastore = require("./datastore");
const deploymentmanager = require("./deploymentmanager");
const dfareporting = require("./dfareporting");
const dialogflow = require("./dialogflow");
const digitalassetlinks = require("./digitalassetlinks");
const discovery = require("./discovery");
const displayvideo = require("./displayvideo");
const dlp = require("./dlp");
const dns = require("./dns");
const docs = require("./docs");
const documentai = require("./documentai");
const domainsrdap = require("./domainsrdap");
const doubleclickbidmanager = require("./doubleclickbidmanager");
const doubleclicksearch = require("./doubleclicksearch");
const drive = require("./drive");
const driveactivity = require("./driveactivity");
const factchecktools = require("./factchecktools");
const fcm = require("./fcm");
const file = require("./file");
const firebase = require("./firebase");
const firebasedynamiclinks = require("./firebasedynamiclinks");
const firebasehosting = require("./firebasehosting");
const firebaseml = require("./firebaseml");
const firebaserules = require("./firebaserules");
const firestore = require("./firestore");
const fitness = require("./fitness");
const games = require("./games");
const gamesConfiguration = require("./gamesConfiguration");
const gamesManagement = require("./gamesManagement");
const gameservices = require("./gameservices");
const genomics = require("./genomics");
const gmail = require("./gmail");
const gmailpostmastertools = require("./gmailpostmastertools");
const groupsmigration = require("./groupsmigration");
const groupssettings = require("./groupssettings");
const healthcare = require("./healthcare");
const homegraph = require("./homegraph");
const iam = require("./iam");
const iamcredentials = require("./iamcredentials");
const iap = require("./iap");
const identitytoolkit = require("./identitytoolkit");
const indexing = require("./indexing");
const jobs = require("./jobs");
const kgsearch = require("./kgsearch");
const language = require("./language");
const libraryagent = require("./libraryagent");
const licensing = require("./licensing");
const lifesciences = require("./lifesciences");
const logging = require("./logging");
const managedidentities = require("./managedidentities");
const manufacturers = require("./manufacturers");
const memcache = require("./memcache");
const ml = require("./ml");
const monitoring = require("./monitoring");
const networkmanagement = require("./networkmanagement");
const oauth2 = require("./oauth2");
const osconfig = require("./osconfig");
const oslogin = require("./oslogin");
const pagespeedonline = require("./pagespeedonline");
const people = require("./people");
const playablelocations = require("./playablelocations");
const playcustomapp = require("./playcustomapp");
const plus = require("./plus");
const policytroubleshooter = require("./policytroubleshooter");
const poly = require("./poly");
const prod_tt_sasportal = require("./prod_tt_sasportal");
const pubsub = require("./pubsub");
const realtimebidding = require("./realtimebidding");
const recommendationengine = require("./recommendationengine");
const recommender = require("./recommender");
const redis = require("./redis");
const remotebuildexecution = require("./remotebuildexecution");
const reseller = require("./reseller");
const run = require("./run");
const runtimeconfig = require("./runtimeconfig");
const safebrowsing = require("./safebrowsing");
const sasportal = require("./sasportal");
const script = require("./script");
const searchconsole = require("./searchconsole");
const secretmanager = require("./secretmanager");
const securitycenter = require("./securitycenter");
const serviceconsumermanagement = require("./serviceconsumermanagement");
const servicecontrol = require("./servicecontrol");
const servicedirectory = require("./servicedirectory");
const servicemanagement = require("./servicemanagement");
const servicenetworking = require("./servicenetworking");
const serviceusage = require("./serviceusage");
const sheets = require("./sheets");
const siteVerification = require("./siteVerification");
const slides = require("./slides");
const sourcerepo = require("./sourcerepo");
const spanner = require("./spanner");
const speech = require("./speech");
const sql = require("./sql");
const storage = require("./storage");
const storagetransfer = require("./storagetransfer");
const streetviewpublish = require("./streetviewpublish");
const tagmanager = require("./tagmanager");
const tasks = require("./tasks");
const testing = require("./testing");
const texttospeech = require("./texttospeech");
const toolresults = require("./toolresults");
const tpu = require("./tpu");
const translate = require("./translate");
const vault = require("./vault");
const vectortile = require("./vectortile");
const verifiedaccess = require("./verifiedaccess");
const videointelligence = require("./videointelligence");
const vision = require("./vision");
const webfonts = require("./webfonts");
const webmasters = require("./webmasters");
const websecurityscanner = require("./websecurityscanner");
const youtube = require("./youtube");
const youtubeAnalytics = require("./youtubeAnalytics");
const youtubereporting = require("./youtubereporting");
exports.APIS = {
    abusiveexperiencereport: abusiveexperiencereport.VERSIONS,
    acceleratedmobilepageurl: acceleratedmobilepageurl.VERSIONS,
    accessapproval: accessapproval.VERSIONS,
    accesscontextmanager: accesscontextmanager.VERSIONS,
    adexchangebuyer: adexchangebuyer.VERSIONS,
    adexchangebuyer2: adexchangebuyer2.VERSIONS,
    adexperiencereport: adexperiencereport.VERSIONS,
    admin: admin.VERSIONS,
    admob: admob.VERSIONS,
    adsense: adsense.VERSIONS,
    adsensehost: adsensehost.VERSIONS,
    alertcenter: alertcenter.VERSIONS,
    analytics: analytics.VERSIONS,
    analyticsreporting: analyticsreporting.VERSIONS,
    androiddeviceprovisioning: androiddeviceprovisioning.VERSIONS,
    androidenterprise: androidenterprise.VERSIONS,
    androidmanagement: androidmanagement.VERSIONS,
    androidpublisher: androidpublisher.VERSIONS,
    appengine: appengine.VERSIONS,
    appsactivity: appsactivity.VERSIONS,
    artifactregistry: artifactregistry.VERSIONS,
    bigquery: bigquery.VERSIONS,
    bigqueryconnection: bigqueryconnection.VERSIONS,
    bigquerydatatransfer: bigquerydatatransfer.VERSIONS,
    bigqueryreservation: bigqueryreservation.VERSIONS,
    bigtableadmin: bigtableadmin.VERSIONS,
    billingbudgets: billingbudgets.VERSIONS,
    binaryauthorization: binaryauthorization.VERSIONS,
    blogger: blogger.VERSIONS,
    books: books.VERSIONS,
    calendar: calendar.VERSIONS,
    chat: chat.VERSIONS,
    chromeuxreport: chromeuxreport.VERSIONS,
    civicinfo: civicinfo.VERSIONS,
    classroom: classroom.VERSIONS,
    cloudasset: cloudasset.VERSIONS,
    cloudbilling: cloudbilling.VERSIONS,
    cloudbuild: cloudbuild.VERSIONS,
    clouddebugger: clouddebugger.VERSIONS,
    clouderrorreporting: clouderrorreporting.VERSIONS,
    cloudfunctions: cloudfunctions.VERSIONS,
    cloudidentity: cloudidentity.VERSIONS,
    cloudiot: cloudiot.VERSIONS,
    cloudkms: cloudkms.VERSIONS,
    cloudprofiler: cloudprofiler.VERSIONS,
    cloudresourcemanager: cloudresourcemanager.VERSIONS,
    cloudscheduler: cloudscheduler.VERSIONS,
    cloudsearch: cloudsearch.VERSIONS,
    cloudshell: cloudshell.VERSIONS,
    cloudtasks: cloudtasks.VERSIONS,
    cloudtrace: cloudtrace.VERSIONS,
    composer: composer.VERSIONS,
    compute: compute.VERSIONS,
    container: container.VERSIONS,
    containeranalysis: containeranalysis.VERSIONS,
    content: content.VERSIONS,
    customsearch: customsearch.VERSIONS,
    datacatalog: datacatalog.VERSIONS,
    dataflow: dataflow.VERSIONS,
    datafusion: datafusion.VERSIONS,
    dataproc: dataproc.VERSIONS,
    datastore: datastore.VERSIONS,
    deploymentmanager: deploymentmanager.VERSIONS,
    dfareporting: dfareporting.VERSIONS,
    dialogflow: dialogflow.VERSIONS,
    digitalassetlinks: digitalassetlinks.VERSIONS,
    discovery: discovery.VERSIONS,
    displayvideo: displayvideo.VERSIONS,
    dlp: dlp.VERSIONS,
    dns: dns.VERSIONS,
    docs: docs.VERSIONS,
    documentai: documentai.VERSIONS,
    domainsrdap: domainsrdap.VERSIONS,
    doubleclickbidmanager: doubleclickbidmanager.VERSIONS,
    doubleclicksearch: doubleclicksearch.VERSIONS,
    drive: drive.VERSIONS,
    driveactivity: driveactivity.VERSIONS,
    factchecktools: factchecktools.VERSIONS,
    fcm: fcm.VERSIONS,
    file: file.VERSIONS,
    firebase: firebase.VERSIONS,
    firebasedynamiclinks: firebasedynamiclinks.VERSIONS,
    firebasehosting: firebasehosting.VERSIONS,
    firebaseml: firebaseml.VERSIONS,
    firebaserules: firebaserules.VERSIONS,
    firestore: firestore.VERSIONS,
    fitness: fitness.VERSIONS,
    games: games.VERSIONS,
    gamesConfiguration: gamesConfiguration.VERSIONS,
    gamesManagement: gamesManagement.VERSIONS,
    gameservices: gameservices.VERSIONS,
    genomics: genomics.VERSIONS,
    gmail: gmail.VERSIONS,
    gmailpostmastertools: gmailpostmastertools.VERSIONS,
    groupsmigration: groupsmigration.VERSIONS,
    groupssettings: groupssettings.VERSIONS,
    healthcare: healthcare.VERSIONS,
    homegraph: homegraph.VERSIONS,
    iam: iam.VERSIONS,
    iamcredentials: iamcredentials.VERSIONS,
    iap: iap.VERSIONS,
    identitytoolkit: identitytoolkit.VERSIONS,
    indexing: indexing.VERSIONS,
    jobs: jobs.VERSIONS,
    kgsearch: kgsearch.VERSIONS,
    language: language.VERSIONS,
    libraryagent: libraryagent.VERSIONS,
    licensing: licensing.VERSIONS,
    lifesciences: lifesciences.VERSIONS,
    logging: logging.VERSIONS,
    managedidentities: managedidentities.VERSIONS,
    manufacturers: manufacturers.VERSIONS,
    memcache: memcache.VERSIONS,
    ml: ml.VERSIONS,
    monitoring: monitoring.VERSIONS,
    networkmanagement: networkmanagement.VERSIONS,
    oauth2: oauth2.VERSIONS,
    osconfig: osconfig.VERSIONS,
    oslogin: oslogin.VERSIONS,
    pagespeedonline: pagespeedonline.VERSIONS,
    people: people.VERSIONS,
    playablelocations: playablelocations.VERSIONS,
    playcustomapp: playcustomapp.VERSIONS,
    plus: plus.VERSIONS,
    policytroubleshooter: policytroubleshooter.VERSIONS,
    poly: poly.VERSIONS,
    prod_tt_sasportal: prod_tt_sasportal.VERSIONS,
    pubsub: pubsub.VERSIONS,
    realtimebidding: realtimebidding.VERSIONS,
    recommendationengine: recommendationengine.VERSIONS,
    recommender: recommender.VERSIONS,
    redis: redis.VERSIONS,
    remotebuildexecution: remotebuildexecution.VERSIONS,
    reseller: reseller.VERSIONS,
    run: run.VERSIONS,
    runtimeconfig: runtimeconfig.VERSIONS,
    safebrowsing: safebrowsing.VERSIONS,
    sasportal: sasportal.VERSIONS,
    script: script.VERSIONS,
    searchconsole: searchconsole.VERSIONS,
    secretmanager: secretmanager.VERSIONS,
    securitycenter: securitycenter.VERSIONS,
    serviceconsumermanagement: serviceconsumermanagement.VERSIONS,
    servicecontrol: servicecontrol.VERSIONS,
    servicedirectory: servicedirectory.VERSIONS,
    servicemanagement: servicemanagement.VERSIONS,
    servicenetworking: servicenetworking.VERSIONS,
    serviceusage: serviceusage.VERSIONS,
    sheets: sheets.VERSIONS,
    siteVerification: siteVerification.VERSIONS,
    slides: slides.VERSIONS,
    sourcerepo: sourcerepo.VERSIONS,
    spanner: spanner.VERSIONS,
    speech: speech.VERSIONS,
    sql: sql.VERSIONS,
    storage: storage.VERSIONS,
    storagetransfer: storagetransfer.VERSIONS,
    streetviewpublish: streetviewpublish.VERSIONS,
    tagmanager: tagmanager.VERSIONS,
    tasks: tasks.VERSIONS,
    testing: testing.VERSIONS,
    texttospeech: texttospeech.VERSIONS,
    toolresults: toolresults.VERSIONS,
    tpu: tpu.VERSIONS,
    translate: translate.VERSIONS,
    vault: vault.VERSIONS,
    vectortile: vectortile.VERSIONS,
    verifiedaccess: verifiedaccess.VERSIONS,
    videointelligence: videointelligence.VERSIONS,
    vision: vision.VERSIONS,
    webfonts: webfonts.VERSIONS,
    webmasters: webmasters.VERSIONS,
    websecurityscanner: websecurityscanner.VERSIONS,
    youtube: youtube.VERSIONS,
    youtubeAnalytics: youtubeAnalytics.VERSIONS,
    youtubereporting: youtubereporting.VERSIONS,
};
class GeneratedAPIs {
    constructor() {
        this.abusiveexperiencereport = abusiveexperiencereport.abusiveexperiencereport;
        this.acceleratedmobilepageurl = acceleratedmobilepageurl.acceleratedmobilepageurl;
        this.accessapproval = accessapproval.accessapproval;
        this.accesscontextmanager = accesscontextmanager.accesscontextmanager;
        this.adexchangebuyer = adexchangebuyer.adexchangebuyer;
        this.adexchangebuyer2 = adexchangebuyer2.adexchangebuyer2;
        this.adexperiencereport = adexperiencereport.adexperiencereport;
        this.admin = admin.admin;
        this.admob = admob.admob;
        this.adsense = adsense.adsense;
        this.adsensehost = adsensehost.adsensehost;
        this.alertcenter = alertcenter.alertcenter;
        this.analytics = analytics.analytics;
        this.analyticsreporting = analyticsreporting.analyticsreporting;
        this.androiddeviceprovisioning = androiddeviceprovisioning.androiddeviceprovisioning;
        this.androidenterprise = androidenterprise.androidenterprise;
        this.androidmanagement = androidmanagement.androidmanagement;
        this.androidpublisher = androidpublisher.androidpublisher;
        this.appengine = appengine.appengine;
        this.appsactivity = appsactivity.appsactivity;
        this.artifactregistry = artifactregistry.artifactregistry;
        this.bigquery = bigquery.bigquery;
        this.bigqueryconnection = bigqueryconnection.bigqueryconnection;
        this.bigquerydatatransfer = bigquerydatatransfer.bigquerydatatransfer;
        this.bigqueryreservation = bigqueryreservation.bigqueryreservation;
        this.bigtableadmin = bigtableadmin.bigtableadmin;
        this.billingbudgets = billingbudgets.billingbudgets;
        this.binaryauthorization = binaryauthorization.binaryauthorization;
        this.blogger = blogger.blogger;
        this.books = books.books;
        this.calendar = calendar.calendar;
        this.chat = chat.chat;
        this.chromeuxreport = chromeuxreport.chromeuxreport;
        this.civicinfo = civicinfo.civicinfo;
        this.classroom = classroom.classroom;
        this.cloudasset = cloudasset.cloudasset;
        this.cloudbilling = cloudbilling.cloudbilling;
        this.cloudbuild = cloudbuild.cloudbuild;
        this.clouddebugger = clouddebugger.clouddebugger;
        this.clouderrorreporting = clouderrorreporting.clouderrorreporting;
        this.cloudfunctions = cloudfunctions.cloudfunctions;
        this.cloudidentity = cloudidentity.cloudidentity;
        this.cloudiot = cloudiot.cloudiot;
        this.cloudkms = cloudkms.cloudkms;
        this.cloudprofiler = cloudprofiler.cloudprofiler;
        this.cloudresourcemanager = cloudresourcemanager.cloudresourcemanager;
        this.cloudscheduler = cloudscheduler.cloudscheduler;
        this.cloudsearch = cloudsearch.cloudsearch;
        this.cloudshell = cloudshell.cloudshell;
        this.cloudtasks = cloudtasks.cloudtasks;
        this.cloudtrace = cloudtrace.cloudtrace;
        this.composer = composer.composer;
        this.compute = compute.compute;
        this.container = container.container;
        this.containeranalysis = containeranalysis.containeranalysis;
        this.content = content.content;
        this.customsearch = customsearch.customsearch;
        this.datacatalog = datacatalog.datacatalog;
        this.dataflow = dataflow.dataflow;
        this.datafusion = datafusion.datafusion;
        this.dataproc = dataproc.dataproc;
        this.datastore = datastore.datastore;
        this.deploymentmanager = deploymentmanager.deploymentmanager;
        this.dfareporting = dfareporting.dfareporting;
        this.dialogflow = dialogflow.dialogflow;
        this.digitalassetlinks = digitalassetlinks.digitalassetlinks;
        this.discovery = discovery.discovery;
        this.displayvideo = displayvideo.displayvideo;
        this.dlp = dlp.dlp;
        this.dns = dns.dns;
        this.docs = docs.docs;
        this.documentai = documentai.documentai;
        this.domainsrdap = domainsrdap.domainsrdap;
        this.doubleclickbidmanager = doubleclickbidmanager.doubleclickbidmanager;
        this.doubleclicksearch = doubleclicksearch.doubleclicksearch;
        this.drive = drive.drive;
        this.driveactivity = driveactivity.driveactivity;
        this.factchecktools = factchecktools.factchecktools;
        this.fcm = fcm.fcm;
        this.file = file.file;
        this.firebase = firebase.firebase;
        this.firebasedynamiclinks = firebasedynamiclinks.firebasedynamiclinks;
        this.firebasehosting = firebasehosting.firebasehosting;
        this.firebaseml = firebaseml.firebaseml;
        this.firebaserules = firebaserules.firebaserules;
        this.firestore = firestore.firestore;
        this.fitness = fitness.fitness;
        this.games = games.games;
        this.gamesConfiguration = gamesConfiguration.gamesConfiguration;
        this.gamesManagement = gamesManagement.gamesManagement;
        this.gameservices = gameservices.gameservices;
        this.genomics = genomics.genomics;
        this.gmail = gmail.gmail;
        this.gmailpostmastertools = gmailpostmastertools.gmailpostmastertools;
        this.groupsmigration = groupsmigration.groupsmigration;
        this.groupssettings = groupssettings.groupssettings;
        this.healthcare = healthcare.healthcare;
        this.homegraph = homegraph.homegraph;
        this.iam = iam.iam;
        this.iamcredentials = iamcredentials.iamcredentials;
        this.iap = iap.iap;
        this.identitytoolkit = identitytoolkit.identitytoolkit;
        this.indexing = indexing.indexing;
        this.jobs = jobs.jobs;
        this.kgsearch = kgsearch.kgsearch;
        this.language = language.language;
        this.libraryagent = libraryagent.libraryagent;
        this.licensing = licensing.licensing;
        this.lifesciences = lifesciences.lifesciences;
        this.logging = logging.logging;
        this.managedidentities = managedidentities.managedidentities;
        this.manufacturers = manufacturers.manufacturers;
        this.memcache = memcache.memcache;
        this.ml = ml.ml;
        this.monitoring = monitoring.monitoring;
        this.networkmanagement = networkmanagement.networkmanagement;
        this.oauth2 = oauth2.oauth2;
        this.osconfig = osconfig.osconfig;
        this.oslogin = oslogin.oslogin;
        this.pagespeedonline = pagespeedonline.pagespeedonline;
        this.people = people.people;
        this.playablelocations = playablelocations.playablelocations;
        this.playcustomapp = playcustomapp.playcustomapp;
        this.plus = plus.plus;
        this.policytroubleshooter = policytroubleshooter.policytroubleshooter;
        this.poly = poly.poly;
        this.prod_tt_sasportal = prod_tt_sasportal.prod_tt_sasportal;
        this.pubsub = pubsub.pubsub;
        this.realtimebidding = realtimebidding.realtimebidding;
        this.recommendationengine = recommendationengine.recommendationengine;
        this.recommender = recommender.recommender;
        this.redis = redis.redis;
        this.remotebuildexecution = remotebuildexecution.remotebuildexecution;
        this.reseller = reseller.reseller;
        this.run = run.run;
        this.runtimeconfig = runtimeconfig.runtimeconfig;
        this.safebrowsing = safebrowsing.safebrowsing;
        this.sasportal = sasportal.sasportal;
        this.script = script.script;
        this.searchconsole = searchconsole.searchconsole;
        this.secretmanager = secretmanager.secretmanager;
        this.securitycenter = securitycenter.securitycenter;
        this.serviceconsumermanagement = serviceconsumermanagement.serviceconsumermanagement;
        this.servicecontrol = servicecontrol.servicecontrol;
        this.servicedirectory = servicedirectory.servicedirectory;
        this.servicemanagement = servicemanagement.servicemanagement;
        this.servicenetworking = servicenetworking.servicenetworking;
        this.serviceusage = serviceusage.serviceusage;
        this.sheets = sheets.sheets;
        this.siteVerification = siteVerification.siteVerification;
        this.slides = slides.slides;
        this.sourcerepo = sourcerepo.sourcerepo;
        this.spanner = spanner.spanner;
        this.speech = speech.speech;
        this.sql = sql.sql;
        this.storage = storage.storage;
        this.storagetransfer = storagetransfer.storagetransfer;
        this.streetviewpublish = streetviewpublish.streetviewpublish;
        this.tagmanager = tagmanager.tagmanager;
        this.tasks = tasks.tasks;
        this.testing = testing.testing;
        this.texttospeech = texttospeech.texttospeech;
        this.toolresults = toolresults.toolresults;
        this.tpu = tpu.tpu;
        this.translate = translate.translate;
        this.vault = vault.vault;
        this.vectortile = vectortile.vectortile;
        this.verifiedaccess = verifiedaccess.verifiedaccess;
        this.videointelligence = videointelligence.videointelligence;
        this.vision = vision.vision;
        this.webfonts = webfonts.webfonts;
        this.webmasters = webmasters.webmasters;
        this.websecurityscanner = websecurityscanner.websecurityscanner;
        this.youtube = youtube.youtube;
        this.youtubeAnalytics = youtubeAnalytics.youtubeAnalytics;
        this.youtubereporting = youtubereporting.youtubereporting;
    }
}
exports.GeneratedAPIs = GeneratedAPIs;
//# sourceMappingURL=index.js.map