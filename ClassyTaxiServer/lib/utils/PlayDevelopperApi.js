"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const authClient = new googleapis_1.google.auth.JWT({
    email: "key.client_email",
    key: "key.private_key",
    scopes: ["https://www.googleapis.com/auth/androidpublisher"]
});
const androidpublisher = googleapis_1.google.androidpublisher({
    version: 'v3',
    auth: authClient
});
function getPlayDeveloperApiClient() {
    return __awaiter(this, void 0, void 0, function* () {
        yield authClient.authorize();
        return androidpublisher;
    });
}
exports.getPlayDeveloperApiClient = getPlayDeveloperApiClient;
//# sourceMappingURL=PlayDevelopperApi.js.map