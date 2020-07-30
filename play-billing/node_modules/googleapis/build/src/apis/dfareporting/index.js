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
exports.auth = exports.dfareporting = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v3_3_1 = require("./v3.3");
const v3_4_1 = require("./v3.4");
exports.VERSIONS = {
    'v3.3': v3_3_1.dfareporting_v3_3.Dfareporting,
    'v3.4': v3_4_1.dfareporting_v3_4.Dfareporting,
};
function dfareporting(versionOrOptions) {
    return googleapis_common_1.getAPI('dfareporting', versionOrOptions, exports.VERSIONS, this);
}
exports.dfareporting = dfareporting;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map