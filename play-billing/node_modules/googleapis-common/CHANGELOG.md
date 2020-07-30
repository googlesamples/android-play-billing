# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-googleapis-common?activeTab=versions

## [4.4.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.3.0...v4.4.0) (2020-06-18)


### Features

* add experimental http/2 support ([#293](https://www.github.com/googleapis/nodejs-googleapis-common/issues/293)) ([4d33ffa](https://www.github.com/googleapis/nodejs-googleapis-common/commit/4d33ffa237e53f6beb88a4e32d6cc7f31f05a8d6))

## [4.3.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.2.1...v4.3.0) (2020-06-03)


### Features

* allow passing a GoogleAuth instance ([#287](https://www.github.com/googleapis/nodejs-googleapis-common/issues/287)) ([c8e9f3b](https://www.github.com/googleapis/nodejs-googleapis-common/commit/c8e9f3b9636d9b6ce176396cc7b273c107168eec))


### Bug Fixes

* expand definition of a stream ([#289](https://www.github.com/googleapis/nodejs-googleapis-common/issues/289)) ([2010721](https://www.github.com/googleapis/nodejs-googleapis-common/commit/20107219a757cf234be9432def49e0644cbd7a79))

### [4.2.1](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.2.0...v4.2.1) (2020-06-02)


### Bug Fixes

* ensure options changes do not leak upstream ([#285](https://www.github.com/googleapis/nodejs-googleapis-common/issues/285)) ([8d4de8a](https://www.github.com/googleapis/nodejs-googleapis-common/commit/8d4de8a03b56d1063aac5f072436917247afc9f1))

## [4.2.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.1.1...v4.2.0) (2020-05-26)


### Features

* add stream method options interface ([#283](https://www.github.com/googleapis/nodejs-googleapis-common/issues/283)) ([a455680](https://www.github.com/googleapis/nodejs-googleapis-common/commit/a4556800fbb39fb7a38733ad4e433d2b0cc7fcda))

### [4.1.1](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.1.0...v4.1.1) (2020-05-04)


### Bug Fixes

* provide mechanism for multipart uploads from browser context ([#274](https://www.github.com/googleapis/nodejs-googleapis-common/issues/274)) ([282bf22](https://www.github.com/googleapis/nodejs-googleapis-common/commit/282bf224471f4ba581e8fc43935411a842510180))
* **deps:** update dependency uuid to v8 ([#278](https://www.github.com/googleapis/nodejs-googleapis-common/issues/278)) ([f242874](https://www.github.com/googleapis/nodejs-googleapis-common/commit/f242874ab03569064c3b6ce13b00465d4cb5aeb7))

## [4.1.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v4.0.0...v4.1.0) (2020-04-12)


### Features

* export additional types ([#256](https://www.github.com/googleapis/nodejs-googleapis-common/issues/256)) ([0534203](https://www.github.com/googleapis/nodejs-googleapis-common/commit/0534203a80fa88b3224bc9da22d2be4a2cb21796))

## [4.0.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.2.2...v4.0.0) (2020-04-05)


### ⚠ BREAKING CHANGES

* require node 10 in engines field (see: https://github.com/googleapis/nodejs-googleapis-common/pull/239) (#240)

### Features

* require node 10 in engines field (see: https://github.com/googleapis/nodejs-googleapis-common/pull/239) ([#240](https://www.github.com/googleapis/nodejs-googleapis-common/issues/240)) ([f210ec1](https://www.github.com/googleapis/nodejs-googleapis-common/commit/f210ec13976567ed41101b3bd85f810d51faa8a8))

### [3.2.2](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.2.1...v3.2.2) (2020-02-28)


### Bug Fixes

* **deps:** update dependency uuid to v7 ([25a40a5](https://www.github.com/googleapis/nodejs-googleapis-common/commit/25a40a58afe3a9aa16d3c5946c362b0f1a22d6a5))

### [3.2.1](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.2.0...v3.2.1) (2020-01-09)


### Bug Fixes

* support rootUrl as global option ([ca51783](https://www.github.com/googleapis/nodejs-googleapis-common/commit/ca5178382046e1f1d365cd37d60bb508febf3db8))

## [3.2.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.1.1...v3.2.0) (2019-12-05)


### Features

* **deps:** auth adds support for additional headers ([#195](https://www.github.com/googleapis/nodejs-googleapis-common/issues/195)) ([1e21283](https://www.github.com/googleapis/nodejs-googleapis-common/commit/1e212838695a6dab9d432e73ca7b014845929f50))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([1a796e7](https://www.github.com/googleapis/nodejs-googleapis-common/commit/1a796e7d1fd98f2f3c0a38a78fc4f8845b416505))
* **docs:** add jsdoc-region-tag plugin ([#185](https://www.github.com/googleapis/nodejs-googleapis-common/issues/185)) ([eddca9f](https://www.github.com/googleapis/nodejs-googleapis-common/commit/eddca9f48a8f7024ae507f7bbce8ceb18adc8f52))
* include user agent for global and service level options ([#193](https://www.github.com/googleapis/nodejs-googleapis-common/issues/193)) ([c878f9c](https://www.github.com/googleapis/nodejs-googleapis-common/commit/c878f9cad06f932d8849e7db44ca9b0cea4900e3))

### [3.1.1](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.1.0...v3.1.1) (2019-10-08)


### Bug Fixes

* allow for resource url parameter ([#178](https://www.github.com/googleapis/nodejs-googleapis-common/issues/178)) ([a3ddd5b](https://www.github.com/googleapis/nodejs-googleapis-common/commit/a3ddd5b))

## [3.1.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v3.0.0...v3.1.0) (2019-08-12)


### Features

* populate x-goog-api-client header ([#159](https://www.github.com/googleapis/nodejs-googleapis-common/issues/159)) ([0c8558e](https://www.github.com/googleapis/nodejs-googleapis-common/commit/0c8558e))

## [3.0.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v2.0.4...v3.0.0) (2019-07-24)


### ⚠ BREAKING CHANGES

* pulls in breaking API changes in google-auth-library. getProjectId() and getProjectId() have been modified to make the impact of these changes less noticeable on the legacy googleapis module (getClient() is idempotent, but getProjectId() will use the last configuration).

### Features

* expose GoogleAuth constructor on AuthPlus class ([#154](https://www.github.com/googleapis/nodejs-googleapis-common/issues/154)) ([7d7a961](https://www.github.com/googleapis/nodejs-googleapis-common/commit/7d7a961))

### [2.0.4](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v2.0.3...v2.0.4) (2019-07-01)


### Bug Fixes

* added _options to topOptions parameters.context.google check ([#148](https://www.github.com/googleapis/nodejs-googleapis-common/issues/148)) ([da1e230](https://www.github.com/googleapis/nodejs-googleapis-common/commit/da1e230))
* **deps:** bump the min required version of all deps ([#152](https://www.github.com/googleapis/nodejs-googleapis-common/issues/152)) ([7634004](https://www.github.com/googleapis/nodejs-googleapis-common/commit/7634004))

### [2.0.3](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v2.0.2...v2.0.3) (2019-06-26)


### Bug Fixes

* remove path params when provided via API level options ([#147](https://www.github.com/googleapis/nodejs-googleapis-common/issues/147)) ([96d940a](https://www.github.com/googleapis/nodejs-googleapis-common/commit/96d940a))
* **docs:** link to reference docs section on googleapis.dev ([#150](https://www.github.com/googleapis/nodejs-googleapis-common/issues/150)) ([3ac41da](https://www.github.com/googleapis/nodejs-googleapis-common/commit/3ac41da))

### [2.0.2](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v2.0.1...v2.0.2) (2019-06-14)


### Bug Fixes

* use deep merge for headers ([#142](https://www.github.com/googleapis/nodejs-googleapis-common/issues/142)) ([404fd19](https://www.github.com/googleapis/nodejs-googleapis-common/commit/404fd19))

### [2.0.1](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v2.0.0...v2.0.1) (2019-06-14)


### Bug Fixes

* **deps:** bump minimum deps and remove pify ([#141](https://www.github.com/googleapis/nodejs-googleapis-common/issues/141)) ([26c3eeb](https://www.github.com/googleapis/nodejs-googleapis-common/commit/26c3eeb))

## [2.0.0](https://www.github.com/googleapis/nodejs-googleapis-common/compare/v1.0.0...v2.0.0) (2019-05-09)


### Bug Fixes

* **deps:** update dependency gaxios to v2 ([#116](https://www.github.com/googleapis/nodejs-googleapis-common/issues/116)) ([0db9055](https://www.github.com/googleapis/nodejs-googleapis-common/commit/0db9055))
* **deps:** update dependency google-auth-library to v4 ([#127](https://www.github.com/googleapis/nodejs-googleapis-common/issues/127)) ([5f83c34](https://www.github.com/googleapis/nodejs-googleapis-common/commit/5f83c34))


### Build System

* upgrade engines field to >=8.10.0 ([#119](https://www.github.com/googleapis/nodejs-googleapis-common/issues/119)) ([ba257e8](https://www.github.com/googleapis/nodejs-googleapis-common/commit/ba257e8))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#119)

## v1.0.0

03-29-2019 11:28 PDT

**This release has breaking changes**. HTTP retries for a subset of requests are now enabled by default. The retry logic matches the defaults for [gaxios](https://github.com/JustinBeckwith/gaxios):

```js
{
  // The amount of time to initially delay the retry
  retryDelay: 100;

  // The HTTP Methods that will be automatically retried.
  httpMethodsToRetry: ['GET','PUT','HEAD','OPTIONS','DELETE']

  // The HTTP response status codes that will automatically be retried.
  statusCodesToRetry: [[100, 199], [429, 429], [500, 599]];
}
```

The behavior can be disabled by setting `retry` to `false` in the request config. For more information, see https://github.com/googleapis/nodejs-googleapis-common/pull/104.

### New Features
- feat: retry requests by default ([#104](https://github.com/googleapis/nodejs-googleapis-common/pull/104))

### Documentation
- docs: update links in contrib guide ([#94](https://github.com/googleapis/nodejs-googleapis-common/pull/94))
- docs: update contributing path in README ([#89](https://github.com/googleapis/nodejs-googleapis-common/pull/89))
- docs: move CONTRIBUTING.md to root ([#88](https://github.com/googleapis/nodejs-googleapis-common/pull/88))
- docs: add lint/fix example to contributing guide ([#86](https://github.com/googleapis/nodejs-googleapis-common/pull/86))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#101](https://github.com/googleapis/nodejs-googleapis-common/pull/101))
- build: use per-repo publish token ([#100](https://github.com/googleapis/nodejs-googleapis-common/pull/100))
- build: Add docuploader credentials to node publish jobs ([#98](https://github.com/googleapis/nodejs-googleapis-common/pull/98))
- build: use node10 to run samples-test, system-test etc ([#97](https://github.com/googleapis/nodejs-googleapis-common/pull/97))
- build: update release configuration
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#92](https://github.com/googleapis/nodejs-googleapis-common/pull/92))
- chore(deps): update dependency @types/tmp to v0.0.34 ([#93](https://github.com/googleapis/nodejs-googleapis-common/pull/93))
- build: create docs test npm scripts ([#91](https://github.com/googleapis/nodejs-googleapis-common/pull/91))
- build: test using @grpc/grpc-js in CI ([#90](https://github.com/googleapis/nodejs-googleapis-common/pull/90))

## v0.7.2

01-26-2019 21:18 PST

- fix: explicit push of finale for multipart/related streams to fix node.js 6 ([#82](https://github.com/googleapis/nodejs-googleapis-common/pull/82))

## v0.7.1

01-22-2019 11:22 PST

### Bug fixes
- fix(types): allow user agent directives in global options ([#78](https://github.com/googleapis/nodejs-googleapis-common/pull/78))
- fix(streams): reroute boundary insertion through transform stream ([#67](https://github.com/googleapis/nodejs-googleapis-common/pull/67))

## v0.7.0

01-21-2019 00:50 PST

### Features
- feat: add ability to augment the user agent ([#76](https://github.com/googleapis/nodejs-googleapis-common/pull/76))

## v0.6.0

- feat: export AuthPlus ([#70](https://github.com/googleapis/nodejs-googleapis-common/pull/70))
- feat: make it ready for use in browser ([#69](https://github.com/googleapis/nodejs-googleapis-common/pull/69))
- build: check for 404s in the docs ([#73](https://github.com/googleapis/nodejs-googleapis-common/pull/73))

### New Features

This release makes it possible to use this library in browser. 
It was actually possible before but with some nasty warnings
printed to JavaScript console. These warnings are now eliminated.

Also, now exporting `AuthPlus` and `OAuth2Client` which allows
APIs that use this common module to drop direct dependency on
`google-auth-library`.

### Internal / Testing Changes

Simple system tests and browser tests were added in this release.

## v0.4.0

11-02-2018 10:31 PDT


### Implementation Changes

### New Features
- add additionalProperties to SchemaItem ([#34](https://github.com/googleapis/nodejs-googleapis-common/pull/34))

### Dependencies
- fix(deps): update dependency pify to v4 ([#23](https://github.com/googleapis/nodejs-googleapis-common/pull/23))
- chore(deps): update dependency typescript to ~3.1.0 ([#20](https://github.com/googleapis/nodejs-googleapis-common/pull/20))

### Documentation
- chore: update issue templates ([#29](https://github.com/googleapis/nodejs-googleapis-common/pull/29))
- chore: remove old issue template ([#27](https://github.com/googleapis/nodejs-googleapis-common/pull/27))
- chore: update issue templates

### Internal / Testing Changes
- chore: update CircleCI config ([#37](https://github.com/googleapis/nodejs-googleapis-common/pull/37))
- chore: include build in eslintignore ([#33](https://github.com/googleapis/nodejs-googleapis-common/pull/33))
- build: run tests on node11 ([#25](https://github.com/googleapis/nodejs-googleapis-common/pull/25))
- chore(deps): update dependency nock to v10 ([#21](https://github.com/googleapis/nodejs-googleapis-common/pull/21))
- chores(build): run codecov on continuous builds ([#19](https://github.com/googleapis/nodejs-googleapis-common/pull/19))
- chores(build): do not collect sponge.xml from windows builds ([#22](https://github.com/googleapis/nodejs-googleapis-common/pull/22))
- build: fix codecov uploading on Kokoro ([#15](https://github.com/googleapis/nodejs-googleapis-common/pull/15))
- build: bring in Kokoro cfgs ([#13](https://github.com/googleapis/nodejs-googleapis-common/pull/13))
- Don't publish sourcemaps ([#12](https://github.com/googleapis/nodejs-googleapis-common/pull/12))
- Enable prefer-const in the eslint config ([#11](https://github.com/googleapis/nodejs-googleapis-common/pull/11))
- Enable no-var in eslint ([#10](https://github.com/googleapis/nodejs-googleapis-common/pull/10))
- Retry npm install in CI ([#9](https://github.com/googleapis/nodejs-googleapis-common/pull/9))

## v0.3.0

This release uses the 2.0 release of `google-auth-library`.  A summary of these changes (including breaking changes) can be found in the [release notes](https://github.com/google/google-auth-library-nodejs/releases/tag/v2.0.0).

### Dependencies
- Upgrade to google-auth-library 2.0 (#6)

## v0.2.1

### Fixes
- fix: use the latest google-auth-library (#4)
