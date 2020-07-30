"use strict";
// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenObject = exports.getDiffs = exports.sortKeys = exports.shouldUpdate = exports.downloadDiscoveryDocs = exports.gfs = exports.DISCOVERY_URL = void 0;
const minimist = require("yargs-parser");
const path = require("path");
const fs = require("fs");
const p_queue_1 = require("p-queue");
const gaxios_1 = require("gaxios");
const mkdirp = require("mkdirp");
exports.DISCOVERY_URL = 'https://www.googleapis.com/discovery/v1/apis/';
// exported for mocking purposes
exports.gfs = {
    mkdir: async (dir) => mkdirp(dir),
    writeFile: (path, obj) => {
        fs.writeFileSync(path, JSON.stringify(obj, null, 2));
    },
    readFile: (path) => {
        return fs.readFileSync(path, 'utf8');
    },
};
/**
 * Download all discovery documents into the /discovery directory.
 * @param options
 */
async function downloadDiscoveryDocs(options) {
    await exports.gfs.mkdir(options.downloadPath);
    const headers = options.includePrivate
        ? {}
        : { 'X-User-Ip': '0.0.0.0' };
    console.log(`sending request to ${options.discoveryUrl}`);
    const res = await gaxios_1.request({ url: options.discoveryUrl, headers });
    const apis = res.data.items;
    const indexPath = path.join(options.downloadPath, 'index.json');
    exports.gfs.writeFile(indexPath, res.data);
    const queue = new p_queue_1.default({ concurrency: 25 });
    console.log(`Downloading ${apis.length} APIs...`);
    const changes = await queue.addAll(apis.map(api => async () => {
        console.log(`Downloading ${api.id}...`);
        const apiPath = path.join(options.downloadPath, api.id.replace(':', '-') + '.json');
        const url = api.discoveryRestUrl;
        const changeSet = { api, changes: [] };
        try {
            const res = await gaxios_1.request({ url });
            // The keys in the downloaded JSON come back in an arbitrary order from
            // request to request. Sort them before storing.
            const newDoc = sortKeys(res.data);
            let updateFile = true;
            try {
                const oldDoc = JSON.parse(await exports.gfs.readFile(apiPath));
                updateFile = shouldUpdate(newDoc, oldDoc);
                changeSet.changes = getDiffs(oldDoc, newDoc);
            }
            catch (_a) {
                // If the file doesn't exist, that's fine it's just new
            }
            if (updateFile) {
                exports.gfs.writeFile(apiPath, newDoc);
            }
        }
        catch (e) {
            console.error(`Error downloading: ${url}`);
        }
        return changeSet;
    }));
    return changes;
}
exports.downloadDiscoveryDocs = downloadDiscoveryDocs;
const ignoreLines = /^\s+"(?:etag|revision)": ".+"/;
/**
 * Determine if any of the changes in the discovery docs were interesting
 * @param newDoc New downloaded schema
 * @param oldDoc The existing schema from disk
 */
function shouldUpdate(newDoc, oldDoc) {
    const [newLines, oldLines] = [newDoc, oldDoc].map(doc => JSON.stringify(doc, null, 2)
        .split('\n')
        .filter(l => !ignoreLines.test(l))
        .join('\n'));
    return newLines !== oldLines;
}
exports.shouldUpdate = shouldUpdate;
/**
 * Given an arbitrary object, recursively sort the properties on the object
 * by the name of the key.  For example:
 * {
 *   b: 1,
 *   a: 2
 * }
 * becomes....
 * {
 *   a: 2,
 *   b: 1
 * }
 * @param obj Object to be sorted
 * @returns object with sorted keys
 */
function sortKeys(obj) {
    const sorted = {};
    let keys = Object.keys(obj);
    keys = keys.sort();
    for (const key of keys) {
        // typeof [] === 'object', which is maddening
        if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
            sorted[key] = sortKeys(obj[key]);
        }
        else {
            sorted[key] = obj[key];
        }
    }
    return sorted;
}
exports.sortKeys = sortKeys;
/**
 * Get a diff between the two
 */
function getDiffs(oldDoc, newDoc) {
    const changes = new Array();
    const flatOld = flattenObject(oldDoc);
    const flatNew = flattenObject(newDoc);
    // find deleted nodes
    Object.keys(flatOld).forEach(key => {
        if (!Object.prototype.hasOwnProperty.call(flatNew, key)) {
            changes.push({
                action: 'DELETED',
                keyName: key,
            });
        }
    });
    // find added nodes
    Object.keys(flatNew).forEach(key => {
        if (!Object.prototype.hasOwnProperty.call(flatOld, key)) {
            changes.push({
                action: 'ADDED',
                keyName: key,
            });
        }
    });
    // find updated nodes
    Object.keys(flatOld).forEach(key => {
        let oldValue = flatOld[key];
        if (Array.isArray(oldValue)) {
            oldValue = oldValue.join(', ');
        }
        let newValue = flatNew[key];
        if (newValue) {
            if (Array.isArray(newValue)) {
                newValue = newValue.join(', ');
            }
            if (newValue !== oldValue && key !== 'revision' && key !== 'etag') {
                changes.push({
                    action: 'CHANGED',
                    keyName: key,
                });
            }
        }
    });
    return changes;
}
exports.getDiffs = getDiffs;
/**
 * Given a complex nested object, flatten the key paths so this:
 * {
 *   a: {
 *     b: 2
 *   },
 *   c: 3
 * }
 * becomes ...
 * {
 *   'a.b': 2
 *   c: 3
 * }
 */
function flattenObject(doc, flat = {}, prefix = '') {
    const keys = Object.keys(doc);
    const newPrefix = prefix ? `${prefix}.` : '';
    for (const key of keys) {
        const fullKey = newPrefix + key;
        const value = doc[key];
        if (!Array.isArray(value) && typeof value === 'object') {
            flattenObject(value, flat, fullKey);
        }
        else {
            flat[fullKey] = value;
        }
    }
    return flat;
}
exports.flattenObject = flattenObject;
/**
 * Allow this file to be directly run via `npm run download`, or imported
 * and used by `generator.ts`
 */
if (require.main === module) {
    const argv = minimist(process.argv.slice(2));
    const discoveryUrl = argv['discovery-url'] || exports.DISCOVERY_URL;
    const downloadPath = argv['download-path'] || path.join(__dirname, '../../../discovery');
    downloadDiscoveryDocs({ discoveryUrl, downloadPath });
}
//# sourceMappingURL=download.js.map