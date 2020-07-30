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
exports.auth = exports.genomics = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
const v1alpha2_1 = require("./v1alpha2");
const v2alpha1_1 = require("./v2alpha1");
exports.VERSIONS = {
    v1: v1_1.genomics_v1.Genomics,
    v1alpha2: v1alpha2_1.genomics_v1alpha2.Genomics,
    v2alpha1: v2alpha1_1.genomics_v2alpha1.Genomics,
};
function genomics(versionOrOptions) {
    return googleapis_common_1.getAPI('genomics', versionOrOptions, exports.VERSIONS, this);
}
exports.genomics = genomics;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map