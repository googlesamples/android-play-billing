"use strict";
/*
 * Copyright 2019 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trace = exports.log = exports.setLoggerVerbosity = exports.setLogger = exports.getLogger = void 0;
const constants_1 = require("./constants");
let _logger = console;
let _logVerbosity = constants_1.LogVerbosity.ERROR;
if (process.env.GRPC_VERBOSITY) {
    switch (process.env.GRPC_VERBOSITY) {
        case 'DEBUG':
            _logVerbosity = constants_1.LogVerbosity.DEBUG;
            break;
        case 'INFO':
            _logVerbosity = constants_1.LogVerbosity.INFO;
            break;
        case 'ERROR':
            _logVerbosity = constants_1.LogVerbosity.ERROR;
            break;
        default:
        // Ignore any other values
    }
}
exports.getLogger = () => {
    return _logger;
};
exports.setLogger = (logger) => {
    _logger = logger;
};
exports.setLoggerVerbosity = (verbosity) => {
    _logVerbosity = verbosity;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.log = (severity, ...args) => {
    if (severity >= _logVerbosity && typeof _logger.error === 'function') {
        _logger.error(...args);
    }
};
const enabledTracers = process.env.GRPC_TRACE
    ? process.env.GRPC_TRACE.split(',')
    : [];
const allEnabled = enabledTracers.includes('all');
function trace(severity, tracer, text) {
    if (allEnabled || enabledTracers.includes(tracer)) {
        exports.log(severity, new Date().toISOString() + ' | ' + tracer + ' | ' + text);
    }
}
exports.trace = trace;
//# sourceMappingURL=logging.js.map