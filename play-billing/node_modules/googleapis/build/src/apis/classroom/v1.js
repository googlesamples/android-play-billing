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
exports.classroom_v1 = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var classroom_v1;
(function (classroom_v1) {
    /**
     * Google Classroom API
     *
     * Manages classes, rosters, and invitations in Google Classroom.
     *
     * @example
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * @namespace classroom
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Classroom
     */
    class Classroom {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.courses = new Resource$Courses(this.context);
            this.invitations = new Resource$Invitations(this.context);
            this.registrations = new Resource$Registrations(this.context);
            this.userProfiles = new Resource$Userprofiles(this.context);
        }
    }
    classroom_v1.Classroom = Classroom;
    class Resource$Courses {
        constructor(context) {
            this.context = context;
            this.aliases = new Resource$Courses$Aliases(this.context);
            this.announcements = new Resource$Courses$Announcements(this.context);
            this.courseWork = new Resource$Courses$Coursework(this.context);
            this.students = new Resource$Courses$Students(this.context);
            this.teachers = new Resource$Courses$Teachers(this.context);
            this.topics = new Resource$Courses$Topics(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses = Resource$Courses;
    class Resource$Courses$Aliases {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/aliases/{alias}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'alias'],
                pathParams: ['alias', 'courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/aliases').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Aliases = Resource$Courses$Aliases;
    class Resource$Courses$Announcements {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/announcements').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/announcements').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        modifyAssignees(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/announcements/{id}:modifyAssignees').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/announcements/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Announcements = Resource$Courses$Announcements;
    class Resource$Courses$Coursework {
        constructor(context) {
            this.context = context;
            this.studentSubmissions = new Resource$Courses$Coursework$Studentsubmissions(this.context);
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        modifyAssignees(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}:modifyAssignees').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Coursework = Resource$Courses$Coursework;
    class Resource$Courses$Coursework$Studentsubmissions {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId'],
                pathParams: ['courseId', 'courseWorkId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        modifyAttachments(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        reclaim(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        return(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        turnIn(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId', 'courseWorkId', 'id'],
                pathParams: ['courseId', 'courseWorkId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Coursework$Studentsubmissions = Resource$Courses$Coursework$Studentsubmissions;
    class Resource$Courses$Students {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/students').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/students/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'userId'],
                pathParams: ['courseId', 'userId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/students/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'userId'],
                pathParams: ['courseId', 'userId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/students').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Students = Resource$Courses$Students;
    class Resource$Courses$Teachers {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/teachers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'userId'],
                pathParams: ['courseId', 'userId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'userId'],
                pathParams: ['courseId', 'userId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/teachers').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Teachers = Resource$Courses$Teachers;
    class Resource$Courses$Topics {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/topics').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/topics').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['courseId'],
                pathParams: ['courseId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['courseId', 'id'],
                pathParams: ['courseId', 'id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Courses$Topics = Resource$Courses$Topics;
    class Resource$Invitations {
        constructor(context) {
            this.context = context;
        }
        accept(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}:accept').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations/{id}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['id'],
                pathParams: ['id'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Invitations = Resource$Invitations;
    class Resource$Registrations {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/registrations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/registrations/{registrationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['registrationId'],
                pathParams: ['registrationId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Registrations = Resource$Registrations;
    class Resource$Userprofiles {
        constructor(context) {
            this.context = context;
            this.guardianInvitations = new Resource$Userprofiles$Guardianinvitations(this.context);
            this.guardians = new Resource$Userprofiles$Guardians(this.context);
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{userId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['userId'],
                pathParams: ['userId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Userprofiles = Resource$Userprofiles;
    class Resource$Userprofiles$Guardianinvitations {
        constructor(context) {
            this.context = context;
        }
        create(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{studentId}/guardianInvitations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST',
                }, options),
                params,
                requiredParams: ['studentId'],
                pathParams: ['studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['studentId', 'invitationId'],
                pathParams: ['invitationId', 'studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{studentId}/guardianInvitations').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['studentId'],
                pathParams: ['studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        patch(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH',
                }, options),
                params,
                requiredParams: ['studentId', 'invitationId'],
                pathParams: ['invitationId', 'studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Userprofiles$Guardianinvitations = Resource$Userprofiles$Guardianinvitations;
    class Resource$Userprofiles$Guardians {
        constructor(context) {
            this.context = context;
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{studentId}/guardians/{guardianId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE',
                }, options),
                params,
                requiredParams: ['studentId', 'guardianId'],
                pathParams: ['guardianId', 'studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{studentId}/guardians/{guardianId}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['studentId', 'guardianId'],
                pathParams: ['guardianId', 'studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/userProfiles/{studentId}/guardians').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['studentId'],
                pathParams: ['studentId'],
                context: this.context,
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    classroom_v1.Resource$Userprofiles$Guardians = Resource$Userprofiles$Guardians;
})(classroom_v1 = exports.classroom_v1 || (exports.classroom_v1 = {}));
//# sourceMappingURL=v1.js.map