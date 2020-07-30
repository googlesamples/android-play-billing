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
exports.auth = exports.admin = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const datatransfer_v1_1 = require("./datatransfer_v1");
const directory_v1_1 = require("./directory_v1");
const reports_v1_1 = require("./reports_v1");
exports.VERSIONS = {
    datatransfer_v1: datatransfer_v1_1.admin_datatransfer_v1.Admin,
    directory_v1: directory_v1_1.admin_directory_v1.Admin,
    reports_v1: reports_v1_1.admin_reports_v1.Admin,
};
function admin(versionOrOptions) {
    return googleapis_common_1.getAPI('admin', versionOrOptions, exports.VERSIONS, this);
}
exports.admin = admin;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map