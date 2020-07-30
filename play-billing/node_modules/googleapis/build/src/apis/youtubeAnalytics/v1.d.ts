import { GoogleConfigurable, GlobalOptions, APIRequestContext } from 'googleapis-common';
export declare namespace youtubeAnalytics_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    /**
     * YouTube Analytics API
     *
     * Retrieves your YouTube Analytics data.
     *
     * @example
     * const {google} = require('googleapis');
     * const youtubeAnalytics = google.youtubeAnalytics('v1');
     *
     * @namespace youtubeAnalytics
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Youtubeanalytics
     */
    class Youtubeanalytics {
        context: APIRequestContext;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
}
