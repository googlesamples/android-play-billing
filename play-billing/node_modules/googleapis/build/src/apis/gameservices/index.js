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
exports.auth = exports.gameservices = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
const v1beta_1 = require("./v1beta");
exports.VERSIONS = {
    v1: v1_1.gameservices_v1.Gameservices,
    v1beta: v1beta_1.gameservices_v1beta.Gameservices,
};
function gameservices(versionOrOptions) {
    return googleapis_common_1.getAPI('gameservices', versionOrOptions, exports.VERSIONS, this);
}
exports.gameservices = gameservices;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
//# sourceMappingURL=index.js.map