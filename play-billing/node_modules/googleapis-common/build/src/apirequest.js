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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAPIRequest = void 0;
const google_auth_library_1 = require("google-auth-library");
const qs = require("qs");
const stream = require("stream");
const urlTemplate = require("url-template");
const uuid = require("uuid");
const extend = require("extend");
const isbrowser_1 = require("./isbrowser");
const h2 = require("./http2");
const resolve = require("url");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isReadableStream(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        typeof obj.pipe === 'function' &&
        obj.readable !== false &&
        typeof obj._read === 'function' &&
        typeof obj._readableState === 'object');
}
function getMissingParams(params, required) {
    const missing = new Array();
    required.forEach(param => {
        // Is the required param in the params object?
        if (params[param] === undefined) {
            missing.push(param);
        }
    });
    // If there are any required params missing, return their names in array,
    // otherwise return null
    return missing.length > 0 ? missing : null;
}
function createAPIRequest(parameters, callback) {
    if (callback) {
        createAPIRequestAsync(parameters).then(r => callback(null, r), callback);
    }
    else {
        return createAPIRequestAsync(parameters);
    }
}
exports.createAPIRequest = createAPIRequest;
async function createAPIRequestAsync(parameters) {
    var _a;
    // Combine the GaxiosOptions options passed with this specific
    // API call with the global options configured at the API Context
    // level, or at the global level.
    const options = extend(true, {}, // Ensure we don't leak settings upstream
    ((_a = parameters.context.google) === null || _a === void 0 ? void 0 : _a._options) || {}, // Google level options
    parameters.context._options || {}, // Per-API options
    parameters.options // API call params
    );
    const params = extend(true, {}, // New base object
    options.params, // Combined global/per-api params
    parameters.params // API call params
    );
    options.userAgentDirectives = options.userAgentDirectives || [];
    const media = params.media || {};
    /**
     * In a previous version of this API, the request body was stuffed in a field
     * named `resource`.  This caused lots of problems, because it's not uncommon
     * to have an actual named parameter required which is also named `resource`.
     * This meant that users would have to use `resource_` in those cases, which
     * pretty much nobody figures out on their own. The request body is now
     * documented as being in the `requestBody` property, but we also need to keep
     * using `resource` for reasons of back-compat. Cases that need to be covered
     * here:
     * - user provides just a `resource` with a request body
     * - user provides both a `resource` and a `resource_`
     * - user provides just a `requestBody`
     * - user provides both a `requestBody` and a `resource`
     */
    let resource = params.requestBody;
    if (!params.requestBody &&
        params.resource &&
        (!parameters.requiredParams.includes('resource') ||
            typeof params.resource !== 'string')) {
        resource = params.resource;
        delete params.resource;
    }
    delete params.requestBody;
    let authClient = params.auth || options.auth;
    const defaultMime = typeof media.body === 'string' ? 'text/plain' : 'application/octet-stream';
    delete params.media;
    delete params.auth;
    // Grab headers from user provided options
    const headers = params.headers || {};
    populateAPIHeader(headers);
    delete params.headers;
    // Un-alias parameters that were modified due to conflicts with reserved names
    Object.keys(params).forEach(key => {
        if (key.slice(-1) === '_') {
            const newKey = key.slice(0, -1);
            params[newKey] = params[key];
            delete params[key];
        }
    });
    // Check for missing required parameters in the API request
    const missingParams = getMissingParams(params, parameters.requiredParams);
    if (missingParams) {
        // Some params are missing - stop further operations and inform the
        // developer which required params are not included in the request
        throw new Error('Missing required parameters: ' + missingParams.join(', '));
    }
    // Parse urls
    if (options.url) {
        options.url = urlTemplate.parse(options.url).expand(params);
    }
    if (parameters.mediaUrl) {
        parameters.mediaUrl = urlTemplate.parse(parameters.mediaUrl).expand(params);
    }
    // Rewrite url if rootUrl is globally set
    if (parameters.context._options.rootUrl !== undefined &&
        options.url !== undefined) {
        const path = options.url.slice(parameters.context._options.rootUrl.length);
        options.url = resolve.resolve(parameters.context._options.rootUrl, path);
    }
    // When forming the querystring, override the serializer so that array
    // values are serialized like this:
    // myParams: ['one', 'two'] ---> 'myParams=one&myParams=two'
    // This serializer also encodes spaces in the querystring as `%20`,
    // whereas the default serializer in gaxios encodes to a `+`.
    options.paramsSerializer = params => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    };
    // delete path params from the params object so they do not end up in query
    parameters.pathParams.forEach(param => delete params[param]);
    // if authClient is actually a string, use it as an API KEY
    if (typeof authClient === 'string') {
        params.key = params.key || authClient;
        authClient = undefined;
    }
    function multipartUpload(multipart) {
        const boundary = uuid.v4();
        const finale = `--${boundary}--`;
        const rStream = new stream.PassThrough({
            flush(callback) {
                this.push('\r\n');
                this.push(finale);
                callback();
            },
        });
        const pStream = new ProgressStream();
        const isStream = isReadableStream(multipart[1].body);
        headers['content-type'] = `multipart/related; boundary=${boundary}`;
        for (const part of multipart) {
            const preamble = `--${boundary}\r\ncontent-type: ${part['content-type']}\r\n\r\n`;
            rStream.push(preamble);
            if (typeof part.body === 'string') {
                rStream.push(part.body);
                rStream.push('\r\n');
            }
            else {
                // Gaxios does not natively support onUploadProgress in node.js.
                // Pipe through the pStream first to read the number of bytes read
                // for the purpose of tracking progress.
                pStream.on('progress', bytesRead => {
                    if (options.onUploadProgress) {
                        options.onUploadProgress({ bytesRead });
                    }
                });
                part.body.pipe(pStream).pipe(rStream);
            }
        }
        if (!isStream) {
            rStream.push(finale);
            rStream.push(null);
        }
        options.data = rStream;
    }
    function browserMultipartUpload(multipart) {
        const boundary = uuid.v4();
        const finale = `--${boundary}--`;
        headers['content-type'] = `multipart/related; boundary=${boundary}`;
        let content = '';
        for (const part of multipart) {
            const preamble = `--${boundary}\r\ncontent-type: ${part['content-type']}\r\n\r\n`;
            content += preamble;
            if (typeof part.body === 'string') {
                content += part.body;
                content += '\r\n';
            }
        }
        content += finale;
        options.data = content;
    }
    if (parameters.mediaUrl && media.body) {
        options.url = parameters.mediaUrl;
        if (resource) {
            params.uploadType = 'multipart';
            const multipart = [
                { 'content-type': 'application/json', body: JSON.stringify(resource) },
                {
                    'content-type': media.mimeType || (resource && resource.mimeType) || defaultMime,
                    body: media.body,
                },
            ];
            if (!isbrowser_1.isBrowser()) {
                // gaxios doesn't support multipart/related uploads, so it has to
                // be implemented here.
                multipartUpload(multipart);
            }
            else {
                browserMultipartUpload(multipart);
            }
        }
        else {
            params.uploadType = 'media';
            Object.assign(headers, { 'content-type': media.mimeType || defaultMime });
            options.data = media.body;
        }
    }
    else {
        options.data = resource || undefined;
    }
    options.headers = extend(true, options.headers || {}, headers);
    options.params = params;
    if (!isbrowser_1.isBrowser()) {
        options.headers['Accept-Encoding'] = 'gzip';
        options.userAgentDirectives.push({
            product: 'google-api-nodejs-client',
            version: pkg.version,
            comment: 'gzip',
        });
        const userAgent = options.userAgentDirectives
            .map(d => {
            let line = `${d.product}/${d.version}`;
            if (d.comment) {
                line += ` (${d.comment})`;
            }
            return line;
        })
            .join(' ');
        options.headers['User-Agent'] = userAgent;
    }
    // By default gaxios treats any 2xx as valid, and all non 2xx status
    // codes as errors.  This is a problem for HTTP 304s when used along
    // with an eTag.
    if (!options.validateStatus) {
        options.validateStatus = status => {
            return (status >= 200 && status < 300) || status === 304;
        };
    }
    // Retry by default
    options.retry = options.retry === undefined ? true : options.retry;
    delete options.auth; // is overridden by our auth code
    // Perform the HTTP request.  NOTE: this function used to return a
    // mikeal/request object. Since the transition to Axios, the method is
    // now void.  This may be a source of confusion for users upgrading from
    // version 24.0 -> 25.0 or up.
    if (authClient && typeof authClient === 'object') {
        if (options.http2) {
            const authHeaders = await authClient.getRequestHeaders(options.url);
            const mooOpts = Object.assign({}, options);
            mooOpts.headers = Object.assign(mooOpts.headers, authHeaders);
            return h2.request(mooOpts);
        }
        else {
            return authClient.request(options);
        }
    }
    else {
        return new google_auth_library_1.DefaultTransporter().request(options);
    }
}
/**
 * Basic Passthrough Stream that records the number of bytes read
 * every time the cursor is moved.
 */
class ProgressStream extends stream.Transform {
    constructor() {
        super(...arguments);
        this.bytesRead = 0;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _transform(chunk, encoding, callback) {
        this.bytesRead += chunk.length;
        this.emit('progress', this.bytesRead);
        this.push(chunk);
        callback();
    }
}
function populateAPIHeader(headers) {
    // TODO: we should eventually think about adding browser support for this
    // populating the gl-web header (web support should also be added to
    // google-auth-library-nodejs).
    if (!isbrowser_1.isBrowser()) {
        headers['x-goog-api-client'] = `gdcl/${pkg.version} gl-node/${process.versions.node}`;
    }
}
//# sourceMappingURL=apirequest.js.map