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
exports.auth = exports.content = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v2_1_1 = require("./v2.1");
const v2_1 = require("./v2");
exports.VERSIONS = {
    'v2.1': v2_1_1.content_v2_1.Content,
    v2: v2_1.content_v2.Content,
};
function content(versionOrOptions) {
    return googleapis_common_1.getAPI('content', versionOrOptions, exports.VERSIONS, this);
}
exports.content = content;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map