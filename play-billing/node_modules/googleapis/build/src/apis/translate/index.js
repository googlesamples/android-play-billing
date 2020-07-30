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
exports.auth = exports.translate = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v2_1 = require("./v2");
const v3_1 = require("./v3");
const v3beta1_1 = require("./v3beta1");
exports.VERSIONS = {
    v2: v2_1.translate_v2.Translate,
    v3: v3_1.translate_v3.Translate,
    v3beta1: v3beta1_1.translate_v3beta1.Translate,
};
function translate(versionOrOptions) {
    return googleapis_common_1.getAPI('translate', versionOrOptions, exports.VERSIONS, this);
}
exports.translate = translate;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map