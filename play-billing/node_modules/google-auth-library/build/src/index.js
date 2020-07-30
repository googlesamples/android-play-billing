"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuth = exports.auth = void 0;
// Copyright 2017 Google LLC
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
const googleauth_1 = require("./auth/googleauth");
Object.defineProperty(exports, "GoogleAuth", { enumerable: true, get: function () { return googleauth_1.GoogleAuth; } });
var computeclient_1 = require("./auth/computeclient");
Object.defineProperty(exports, "Compute", { enumerable: true, get: function () { return computeclient_1.Compute; } });
var envDetect_1 = require("./auth/envDetect");
Object.defineProperty(exports, "GCPEnv", { enumerable: true, get: function () { return envDetect_1.GCPEnv; } });
var iam_1 = require("./auth/iam");
Object.defineProperty(exports, "IAMAuth", { enumerable: true, get: function () { return iam_1.IAMAuth; } });
var idtokenclient_1 = require("./auth/idtokenclient");
Object.defineProperty(exports, "IdTokenClient", { enumerable: true, get: function () { return idtokenclient_1.IdTokenClient; } });
var jwtaccess_1 = require("./auth/jwtaccess");
Object.defineProperty(exports, "JWTAccess", { enumerable: true, get: function () { return jwtaccess_1.JWTAccess; } });
var jwtclient_1 = require("./auth/jwtclient");
Object.defineProperty(exports, "JWT", { enumerable: true, get: function () { return jwtclient_1.JWT; } });
var oauth2client_1 = require("./auth/oauth2client");
Object.defineProperty(exports, "CodeChallengeMethod", { enumerable: true, get: function () { return oauth2client_1.CodeChallengeMethod; } });
Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function () { return oauth2client_1.OAuth2Client; } });
var loginticket_1 = require("./auth/loginticket");
Object.defineProperty(exports, "LoginTicket", { enumerable: true, get: function () { return loginticket_1.LoginTicket; } });
var refreshclient_1 = require("./auth/refreshclient");
Object.defineProperty(exports, "UserRefreshClient", { enumerable: true, get: function () { return refreshclient_1.UserRefreshClient; } });
var transporters_1 = require("./transporters");
Object.defineProperty(exports, "DefaultTransporter", { enumerable: true, get: function () { return transporters_1.DefaultTransporter; } });
const auth = new googleauth_1.GoogleAuth();
exports.auth = auth;
//# sourceMappingURL=index.js.map