"use strict";
/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPem = void 0;
const fs = require("fs");
const forge = require("node-forge");
const util_1 = require("util");
const readFile = util_1.promisify(fs.readFile);
function getPem(filename, callback) {
    if (callback) {
        getPemAsync(filename)
            .then(pem => callback(null, pem))
            .catch(err => callback(err, null));
    }
    else {
        return getPemAsync(filename);
    }
}
exports.getPem = getPem;
function getPemAsync(filename) {
    return readFile(filename, { encoding: 'base64' }).then(keyp12 => {
        return convertToPem(keyp12);
    });
}
/**
 * Converts a P12 in base64 encoding to a pem.
 * @param p12base64 String containing base64 encoded p12.
 * @returns a string containing the pem.
 */
function convertToPem(p12base64) {
    const p12Der = forge.util.decode64(p12base64);
    const p12Asn1 = forge.asn1.fromDer(p12Der);
    const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, 'notasecret');
    const bags = p12.getBags({ friendlyName: 'privatekey' });
    if (bags.friendlyName) {
        const privateKey = bags.friendlyName[0].key;
        const pem = forge.pki.privateKeyToPem(privateKey);
        return pem.replace(/\r\n/g, '\n');
    }
    else {
        throw new Error('Unable to get friendly name.');
    }
}
//# sourceMappingURL=index.js.map