"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright 2018 gRPC authors.
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
const fs = require("fs");
const path = require("path");
const Protobuf = require("protobufjs");
const descriptor = require("protobufjs/ext/descriptor");
const camelCase = require("lodash.camelcase");
const descriptorOptions = {
    longs: String,
    enums: String,
    bytes: String,
    defaults: true,
    oneofs: true,
    json: true,
};
function joinName(baseName, name) {
    if (baseName === '') {
        return name;
    }
    else {
        return baseName + '.' + name;
    }
}
function isHandledReflectionObject(obj) {
    return (obj instanceof Protobuf.Service ||
        obj instanceof Protobuf.Type ||
        obj instanceof Protobuf.Enum);
}
function isNamespaceBase(obj) {
    return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
}
function getAllHandledReflectionObjects(obj, parentName) {
    const objName = joinName(parentName, obj.name);
    if (isHandledReflectionObject(obj)) {
        return [[objName, obj]];
    }
    else {
        if (isNamespaceBase(obj) && typeof obj.nested !== 'undefined') {
            return Object.keys(obj.nested)
                .map(name => {
                return getAllHandledReflectionObjects(obj.nested[name], objName);
            })
                .reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
        }
    }
    return [];
}
function createDeserializer(cls, options) {
    return function deserialize(argBuf) {
        return cls.toObject(cls.decode(argBuf), options);
    };
}
function createSerializer(cls) {
    return function serialize(arg) {
        const message = cls.fromObject(arg);
        return cls.encode(message).finish();
    };
}
function createMethodDefinition(method, serviceName, options, fileDescriptors) {
    /* This is only ever called after the corresponding root.resolveAll(), so we
     * can assume that the resolved request and response types are non-null */
    const requestType = method.resolvedRequestType;
    const responseType = method.resolvedResponseType;
    return {
        path: '/' + serviceName + '/' + method.name,
        requestStream: !!method.requestStream,
        responseStream: !!method.responseStream,
        requestSerialize: createSerializer(requestType),
        requestDeserialize: createDeserializer(requestType, options),
        responseSerialize: createSerializer(responseType),
        responseDeserialize: createDeserializer(responseType, options),
        // TODO(murgatroid99): Find a better way to handle this
        originalName: camelCase(method.name),
        requestType: createMessageDefinition(requestType, fileDescriptors),
        responseType: createMessageDefinition(responseType, fileDescriptors),
    };
}
function createServiceDefinition(service, name, options, fileDescriptors) {
    const def = {};
    for (const method of service.methodsArray) {
        def[method.name] = createMethodDefinition(method, name, options, fileDescriptors);
    }
    return def;
}
function createMessageDefinition(message, fileDescriptors) {
    const messageDescriptor = message.toDescriptor('proto3');
    return {
        format: 'Protocol Buffer 3 DescriptorProto',
        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors,
    };
}
function createEnumDefinition(enumType, fileDescriptors) {
    const enumDescriptor = enumType.toDescriptor('proto3');
    return {
        format: 'Protocol Buffer 3 EnumDescriptorProto',
        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors,
    };
}
/**
 * function createDefinition(obj: Protobuf.Service, name: string, options:
 * Options): ServiceDefinition; function createDefinition(obj: Protobuf.Type,
 * name: string, options: Options): MessageTypeDefinition; function
 * createDefinition(obj: Protobuf.Enum, name: string, options: Options):
 * EnumTypeDefinition;
 */
function createDefinition(obj, name, options, fileDescriptors) {
    if (obj instanceof Protobuf.Service) {
        return createServiceDefinition(obj, name, options, fileDescriptors);
    }
    else if (obj instanceof Protobuf.Type) {
        return createMessageDefinition(obj, fileDescriptors);
    }
    else if (obj instanceof Protobuf.Enum) {
        return createEnumDefinition(obj, fileDescriptors);
    }
    else {
        throw new Error('Type mismatch in reflection object handling');
    }
}
function createPackageDefinition(root, options) {
    const def = {};
    root.resolveAll();
    const descriptorList = root.toDescriptor('proto3').file;
    const bufferList = descriptorList.map(value => Buffer.from(descriptor.FileDescriptorProto.encode(value).finish()));
    for (const [name, obj] of getAllHandledReflectionObjects(root, '')) {
        def[name] = createDefinition(obj, name, options, bufferList);
    }
    return def;
}
function addIncludePathResolver(root, includePaths) {
    const originalResolvePath = root.resolvePath;
    root.resolvePath = (origin, target) => {
        if (path.isAbsolute(target)) {
            return target;
        }
        for (const directory of includePaths) {
            const fullPath = path.join(directory, target);
            try {
                fs.accessSync(fullPath, fs.constants.R_OK);
                return fullPath;
            }
            catch (err) {
                continue;
            }
        }
        process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
        return originalResolvePath(origin, target);
    };
}
/**
 * Load a .proto file with the specified options.
 * @param filename One or multiple file paths to load. Can be an absolute path
 *     or relative to an include path.
 * @param options.keepCase Preserve field names. The default is to change them
 *     to camel case.
 * @param options.longs The type that should be used to represent `long` values.
 *     Valid options are `Number` and `String`. Defaults to a `Long` object type
 *     from a library.
 * @param options.enums The type that should be used to represent `enum` values.
 *     The only valid option is `String`. Defaults to the numeric value.
 * @param options.bytes The type that should be used to represent `bytes`
 *     values. Valid options are `Array` and `String`. The default is to use
 *     `Buffer`.
 * @param options.defaults Set default values on output objects. Defaults to
 *     `false`.
 * @param options.arrays Set empty arrays for missing array values even if
 *     `defaults` is `false`. Defaults to `false`.
 * @param options.objects Set empty objects for missing object values even if
 *     `defaults` is `false`. Defaults to `false`.
 * @param options.oneofs Set virtual oneof properties to the present field's
 *     name
 * @param options.includeDirs Paths to search for imported `.proto` files.
 */
function load(filename, options) {
    const root = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
            return Promise.reject(new Error('The includeDirs option must be an array'));
        }
        addIncludePathResolver(root, options.includeDirs);
    }
    return root.load(filename, options).then(loadedRoot => {
        loadedRoot.resolveAll();
        return createPackageDefinition(root, options);
    });
}
exports.load = load;
function loadSync(filename, options) {
    const root = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
        if (!Array.isArray(options.includeDirs)) {
            throw new Error('The includeDirs option must be an array');
        }
        addIncludePathResolver(root, options.includeDirs);
    }
    const loadedRoot = root.loadSync(filename, options);
    loadedRoot.resolveAll();
    return createPackageDefinition(root, options);
}
exports.loadSync = loadSync;
// Load Google's well-known proto files that aren't exposed by Protobuf.js.
// Protobuf.js exposes: any, duration, empty, field_mask, struct, timestamp,
// and wrappers. compiler/plugin is excluded in Protobuf.js and here.
// Using constant strings for compatibility with tools like Webpack
const apiDescriptor = require('protobufjs/google/protobuf/api.json');
const descriptorDescriptor = require('protobufjs/google/protobuf/descriptor.json');
const sourceContextDescriptor = require('protobufjs/google/protobuf/source_context.json');
const typeDescriptor = require('protobufjs/google/protobuf/type.json');
Protobuf.common('api', apiDescriptor.nested.google.nested.protobuf.nested);
Protobuf.common('descriptor', descriptorDescriptor.nested.google.nested.protobuf.nested);
Protobuf.common('source_context', sourceContextDescriptor.nested.google.nested.protobuf.nested);
Protobuf.common('type', typeDescriptor.nested.google.nested.protobuf.nested);
//# sourceMappingURL=index.js.map