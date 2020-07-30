# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/google-auth-library-nodejs?activeTab=versions

### [6.0.5](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v6.0.4...v6.0.5) (2020-07-13)


### Bug Fixes

* **deps:** update dependency lru-cache to v6 ([#995](https://www.github.com/googleapis/google-auth-library-nodejs/issues/995)) ([3c07566](https://www.github.com/googleapis/google-auth-library-nodejs/commit/3c07566f0384611227030e9b381fc6e6707e526b))

### [6.0.4](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v6.0.3...v6.0.4) (2020-07-09)


### Bug Fixes

* typeo in nodejs .gitattribute ([#993](https://www.github.com/googleapis/google-auth-library-nodejs/issues/993)) ([ad12ceb](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ad12ceb3309b7db7394fe1fe1d5e7b2e4901141d))

### [6.0.3](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v6.0.2...v6.0.3) (2020-07-06)


### Bug Fixes

* **deps:** update dependency puppeteer to v5 ([#986](https://www.github.com/googleapis/google-auth-library-nodejs/issues/986)) ([7cfe6f2](https://www.github.com/googleapis/google-auth-library-nodejs/commit/7cfe6f200b9c04fe4805d1b1e3a2e03a9668e551))

### [6.0.2](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v6.0.1...v6.0.2) (2020-06-16)


### Bug Fixes

* **deps:** update dependency puppeteer to v4 ([#976](https://www.github.com/googleapis/google-auth-library-nodejs/issues/976)) ([9ddfb9b](https://www.github.com/googleapis/google-auth-library-nodejs/commit/9ddfb9befedd10d6c82cbf799c1afea9ba10d444))
* **tsc:** audience property is not mandatory on verifyIdToken ([#972](https://www.github.com/googleapis/google-auth-library-nodejs/issues/972)) ([17a7e24](https://www.github.com/googleapis/google-auth-library-nodejs/commit/17a7e247cdb798ddf3173cf44ab762665cbce0a1))
* **types:** add locale property to idtoken ([#974](https://www.github.com/googleapis/google-auth-library-nodejs/issues/974)) ([ebf9bed](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ebf9beda30f251da6adb9ec0bf943019ea0171c5)), closes [#973](https://www.github.com/googleapis/google-auth-library-nodejs/issues/973)

### [6.0.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v6.0.0...v6.0.1) (2020-05-21)


### Bug Fixes

* **deps:** update dependency google-auth-library to v6 ([#930](https://www.github.com/googleapis/google-auth-library-nodejs/issues/930)) ([81fdabe](https://www.github.com/googleapis/google-auth-library-nodejs/commit/81fdabe6fb7f0b8c5114c0d835680a28def822e2))
* apache license URL ([#468](https://www.github.com/googleapis/google-auth-library-nodejs/issues/468)) ([#936](https://www.github.com/googleapis/google-auth-library-nodejs/issues/936)) ([53831cf](https://www.github.com/googleapis/google-auth-library-nodejs/commit/53831cf72f6669d13692c5665fef5062dc8f6c1a))
* **deps:** update dependency puppeteer to v3 ([#944](https://www.github.com/googleapis/google-auth-library-nodejs/issues/944)) ([4d6fba0](https://www.github.com/googleapis/google-auth-library-nodejs/commit/4d6fba034cb0e70092656e9aff1ba419fdfca880))
* fixing tsc error caused by @types/node update ([#965](https://www.github.com/googleapis/google-auth-library-nodejs/issues/965)) ([b94edb0](https://www.github.com/googleapis/google-auth-library-nodejs/commit/b94edb0716572593e4e9cb8a9b9bbfa567f71625))
* gcp-metadata now warns rather than throwing ([#956](https://www.github.com/googleapis/google-auth-library-nodejs/issues/956)) ([89e16c2](https://www.github.com/googleapis/google-auth-library-nodejs/commit/89e16c2401101d086a8f9d05b8f0771b5c74157c))

## [6.0.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.10.1...v6.0.0) (2020-03-26)


### ⚠ BREAKING CHANGES

* typescript@3.7.x introduced some breaking changes in
generated code.
* require node 10 in engines field (#926)
* remove deprecated methods (#906)

### Features

* require node 10 in engines field ([#926](https://www.github.com/googleapis/google-auth-library-nodejs/issues/926)) ([d89c59a](https://www.github.com/googleapis/google-auth-library-nodejs/commit/d89c59a316e9ca5b8c351128ee3e2d91e9729d5c))


### Bug Fixes

* do not warn for SDK creds ([#905](https://www.github.com/googleapis/google-auth-library-nodejs/issues/905)) ([9536840](https://www.github.com/googleapis/google-auth-library-nodejs/commit/9536840f88e77f747bbbc2c1b5b4289018fc23c9))
* use iamcredentials API to sign blobs ([#908](https://www.github.com/googleapis/google-auth-library-nodejs/issues/908)) ([7b8e4c5](https://www.github.com/googleapis/google-auth-library-nodejs/commit/7b8e4c52e31bb3d448c3ff8c05002188900eaa04))
* **deps:** update dependency gaxios to v3 ([#917](https://www.github.com/googleapis/google-auth-library-nodejs/issues/917)) ([1f4bf61](https://www.github.com/googleapis/google-auth-library-nodejs/commit/1f4bf6128a0dcf22cfe1ec492b2192f513836cb2))
* **deps:** update dependency gcp-metadata to v4 ([#918](https://www.github.com/googleapis/google-auth-library-nodejs/issues/918)) ([d337131](https://www.github.com/googleapis/google-auth-library-nodejs/commit/d337131d009cc1f8182f7a1f8a9034433ee3fbf7))
* **types:** add additional fields to TokenInfo ([#907](https://www.github.com/googleapis/google-auth-library-nodejs/issues/907)) ([5b48eb8](https://www.github.com/googleapis/google-auth-library-nodejs/commit/5b48eb86c108c47d317a0eb96b47c0cae86f98cb))


### Build System

* update to latest gts and TypeScript ([#927](https://www.github.com/googleapis/google-auth-library-nodejs/issues/927)) ([e11e18c](https://www.github.com/googleapis/google-auth-library-nodejs/commit/e11e18cb33eb60a666980d061c54bb8891cdd242))


### Miscellaneous Chores

* remove deprecated methods ([#906](https://www.github.com/googleapis/google-auth-library-nodejs/issues/906)) ([f453fb7](https://www.github.com/googleapis/google-auth-library-nodejs/commit/f453fb7d8355e6dc74800b18d6f43c4e91d4acc9))

### [5.10.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.10.0...v5.10.1) (2020-02-25)


### Bug Fixes

* if GCF environment detected, increase library timeout ([#899](https://www.github.com/googleapis/google-auth-library-nodejs/issues/899)) ([2577ff2](https://www.github.com/googleapis/google-auth-library-nodejs/commit/2577ff28bf22dfc58bd09e7365471c16f359f109))

## [5.10.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.9.2...v5.10.0) (2020-02-20)


### Features

* support for verifying ES256 and retrieving IAP public keys ([#887](https://www.github.com/googleapis/google-auth-library-nodejs/issues/887)) ([a98e386](https://www.github.com/googleapis/google-auth-library-nodejs/commit/a98e38678dc4a5e963356378c75c658e36dccd01))


### Bug Fixes

* **docs:** correct links in README ([f6a3194](https://www.github.com/googleapis/google-auth-library-nodejs/commit/f6a3194ff6df97d4fd833ae69ec80c05eab46e7b)), closes [#891](https://www.github.com/googleapis/google-auth-library-nodejs/issues/891)

### [5.9.2](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.9.1...v5.9.2) (2020-01-28)


### Bug Fixes

* populate credentials.refresh_token if provided ([#881](https://www.github.com/googleapis/google-auth-library-nodejs/issues/881)) ([63c4637](https://www.github.com/googleapis/google-auth-library-nodejs/commit/63c4637c57e4113a7b01bf78933a8bff0356c104))

### [5.9.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.9.0...v5.9.1) (2020-01-16)


### Bug Fixes

* ensures GCE metadata sets email field for ID tokens ([#874](https://www.github.com/googleapis/google-auth-library-nodejs/issues/874)) ([e45b73d](https://www.github.com/googleapis/google-auth-library-nodejs/commit/e45b73dbb22e1c2d8115882006a21337c7d9bd63))

## [5.9.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.8.0...v5.9.0) (2020-01-14)


### Features

* add methods for fetching and using id tokens ([#867](https://www.github.com/googleapis/google-auth-library-nodejs/issues/867)) ([8036f1a](https://www.github.com/googleapis/google-auth-library-nodejs/commit/8036f1a51d1a103b08daf62c7ce372c9f68cd9d4))
* export LoginTicket and TokenPayload ([#870](https://www.github.com/googleapis/google-auth-library-nodejs/issues/870)) ([539ea5e](https://www.github.com/googleapis/google-auth-library-nodejs/commit/539ea5e804386b79ecf469838fff19465aeb2ca6))

## [5.8.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.7.0...v5.8.0) (2020-01-06)


### Features

* cache results of getEnv() ([#857](https://www.github.com/googleapis/google-auth-library-nodejs/issues/857)) ([d4545a9](https://www.github.com/googleapis/google-auth-library-nodejs/commit/d4545a9001184fac0b67e7073e463e3efd345037))


### Bug Fixes

* **deps:** update dependency jws to v4 ([#851](https://www.github.com/googleapis/google-auth-library-nodejs/issues/851)) ([71366d4](https://www.github.com/googleapis/google-auth-library-nodejs/commit/71366d43406047ce9e1d818d59a14191fb678e3a))

## [5.7.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.6.1...v5.7.0) (2019-12-10)


### Features

* make x-goog-user-project work for additional auth clients ([#848](https://www.github.com/googleapis/google-auth-library-nodejs/issues/848)) ([46af865](https://www.github.com/googleapis/google-auth-library-nodejs/commit/46af865172103c6f28712d78b30c2291487cbe86))

### [5.6.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.6.0...v5.6.1) (2019-12-05)


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([#845](https://www.github.com/googleapis/google-auth-library-nodejs/issues/845)) ([a9c6e92](https://www.github.com/googleapis/google-auth-library-nodejs/commit/a9c6e9284efe8102974c57c9824ed6275d743c7a))
* **docs:** improve types and docs for generateCodeVerifierAsync ([#840](https://www.github.com/googleapis/google-auth-library-nodejs/issues/840)) ([04dae9c](https://www.github.com/googleapis/google-auth-library-nodejs/commit/04dae9c271f0099025188489c61fd245d482832b))

## [5.6.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.5.1...v5.6.0) (2019-12-02)


### Features

* populate x-goog-user-project for requestAsync ([#837](https://www.github.com/googleapis/google-auth-library-nodejs/issues/837)) ([5a068fb](https://www.github.com/googleapis/google-auth-library-nodejs/commit/5a068fb8f5a3827ab70404f1d9699a97f962bdad))
* set x-goog-user-project header, with quota_project from default credentials ([#829](https://www.github.com/googleapis/google-auth-library-nodejs/issues/829)) ([3240d16](https://www.github.com/googleapis/google-auth-library-nodejs/commit/3240d16f05171781fe6d70d64c476bceb25805a5))


### Bug Fixes

* **deps:** update dependency puppeteer to v2 ([#821](https://www.github.com/googleapis/google-auth-library-nodejs/issues/821)) ([2c04117](https://www.github.com/googleapis/google-auth-library-nodejs/commit/2c0411708761cc7debdda1af1e593d82cb4aed31))
* **docs:** add jsdoc-region-tag plugin ([#826](https://www.github.com/googleapis/google-auth-library-nodejs/issues/826)) ([558677f](https://www.github.com/googleapis/google-auth-library-nodejs/commit/558677fd90d3451e9ac4bf6d0b98907e3313f287))
* expand on x-goog-user-project to handle auth.getClient() ([#831](https://www.github.com/googleapis/google-auth-library-nodejs/issues/831)) ([3646b7f](https://www.github.com/googleapis/google-auth-library-nodejs/commit/3646b7f9deb296aaff602dd2168ce93f014ce840))
* use quota_project_id field instead of quota_project ([#832](https://www.github.com/googleapis/google-auth-library-nodejs/issues/832)) ([8933966](https://www.github.com/googleapis/google-auth-library-nodejs/commit/8933966659f3b07f5454a2756fa52d92fea147d2))

### [5.5.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.5.0...v5.5.1) (2019-10-22)


### Bug Fixes

* **deps:** update gaxios dependency ([#817](https://www.github.com/googleapis/google-auth-library-nodejs/issues/817)) ([6730698](https://www.github.com/googleapis/google-auth-library-nodejs/commit/6730698b876eb52889acfead33bc4af52a8a7ba5))
* don't append x-goog-api-client multiple times ([#820](https://www.github.com/googleapis/google-auth-library-nodejs/issues/820)) ([a46b271](https://www.github.com/googleapis/google-auth-library-nodejs/commit/a46b271947b635377eacbdfcd22ae363ce9260a1))

## [5.5.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.4.1...v5.5.0) (2019-10-14)


### Features

* **refresh:** add forceRefreshOnFailure flag for refreshing token on error ([#790](https://www.github.com/googleapis/google-auth-library-nodejs/issues/790)) ([54cf477](https://www.github.com/googleapis/google-auth-library-nodejs/commit/54cf4770f487fd1db48f2444c86109ca97608ed1))

### [5.4.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.4.0...v5.4.1) (2019-10-10)


### Bug Fixes

* **deps:** updats to gcp-metadata with debug option ([#811](https://www.github.com/googleapis/google-auth-library-nodejs/issues/811)) ([744e3e8](https://www.github.com/googleapis/google-auth-library-nodejs/commit/744e3e8fea223eb4fb115ef0a4d36ad88fc6921a))

## [5.4.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.3.0...v5.4.0) (2019-10-08)


### Features

* do not deprecate refreshAccessToken ([#804](https://www.github.com/googleapis/google-auth-library-nodejs/issues/804)) ([f05de11](https://www.github.com/googleapis/google-auth-library-nodejs/commit/f05de11))

## [5.3.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.2.2...v5.3.0) (2019-09-27)


### Features

* if token expires soon, force refresh ([#794](https://www.github.com/googleapis/google-auth-library-nodejs/issues/794)) ([fecd4f4](https://www.github.com/googleapis/google-auth-library-nodejs/commit/fecd4f4))

### [5.2.2](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.2.1...v5.2.2) (2019-09-17)


### Bug Fixes

* **deps:** update to gcp-metadata and address envDetect performance issues ([#787](https://www.github.com/googleapis/google-auth-library-nodejs/issues/787)) ([651b5d4](https://www.github.com/googleapis/google-auth-library-nodejs/commit/651b5d4))

### [5.2.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.2.0...v5.2.1) (2019-09-06)


### Bug Fixes

* **deps:** nock@next has types that work with our libraries ([#783](https://www.github.com/googleapis/google-auth-library-nodejs/issues/783)) ([a253709](https://www.github.com/googleapis/google-auth-library-nodejs/commit/a253709))
* **docs:** fix variable name in README.md ([#782](https://www.github.com/googleapis/google-auth-library-nodejs/issues/782)) ([d8c70b9](https://www.github.com/googleapis/google-auth-library-nodejs/commit/d8c70b9))

## [5.2.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.1.2...v5.2.0) (2019-08-09)


### Features

* populate x-goog-api-client header for auth ([#772](https://www.github.com/googleapis/google-auth-library-nodejs/issues/772)) ([526dcf6](https://www.github.com/googleapis/google-auth-library-nodejs/commit/526dcf6))

### [5.1.2](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.1.1...v5.1.2) (2019-08-05)


### Bug Fixes

* **deps:** upgrade to gtoken 4.x ([#763](https://www.github.com/googleapis/google-auth-library-nodejs/issues/763)) ([a1fcc25](https://www.github.com/googleapis/google-auth-library-nodejs/commit/a1fcc25))

### [5.1.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.1.0...v5.1.1) (2019-07-29)


### Bug Fixes

* **deps:** update dependency google-auth-library to v5 ([#759](https://www.github.com/googleapis/google-auth-library-nodejs/issues/759)) ([e32a12b](https://www.github.com/googleapis/google-auth-library-nodejs/commit/e32a12b))

## [5.1.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v5.0.0...v5.1.0) (2019-07-24)


### Features

* **types:** expose ProjectIdCallback interface ([#753](https://www.github.com/googleapis/google-auth-library-nodejs/issues/753)) ([5577f0d](https://www.github.com/googleapis/google-auth-library-nodejs/commit/5577f0d))

## [5.0.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.6...v5.0.0) (2019-07-23)


### ⚠ BREAKING CHANGES

* getOptions() no longer accepts GoogleAuthOptions (#749)

### Code Refactoring

* getOptions() no longer accepts GoogleAuthOptions ([#749](https://www.github.com/googleapis/google-auth-library-nodejs/issues/749)) ([ba58e3b](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ba58e3b))

### [4.2.6](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.5...v4.2.6) (2019-07-23)


### Bug Fixes

* use FUNCTION_TARGET to detect GCF 10 and above ([#748](https://www.github.com/googleapis/google-auth-library-nodejs/issues/748)) ([ca17685](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ca17685))

### [4.2.5](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.4...v4.2.5) (2019-06-26)


### Bug Fixes

* **docs:** make anchors work in jsdoc ([#742](https://www.github.com/googleapis/google-auth-library-nodejs/issues/742)) ([7901456](https://www.github.com/googleapis/google-auth-library-nodejs/commit/7901456))

### [4.2.4](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.3...v4.2.4) (2019-06-25)


### Bug Fixes

* only require fast-text-encoding when needed ([#740](https://www.github.com/googleapis/google-auth-library-nodejs/issues/740)) ([04fcd77](https://www.github.com/googleapis/google-auth-library-nodejs/commit/04fcd77))

### [4.2.3](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.2...v4.2.3) (2019-06-24)


### Bug Fixes

* feature detection to check for browser ([#738](https://www.github.com/googleapis/google-auth-library-nodejs/issues/738)) ([83a5ba5](https://www.github.com/googleapis/google-auth-library-nodejs/commit/83a5ba5))

### [4.2.2](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.1...v4.2.2) (2019-06-18)


### Bug Fixes

* **compute:** correctly specify scopes when fetching token ([#735](https://www.github.com/googleapis/google-auth-library-nodejs/issues/735)) ([4803e3c](https://www.github.com/googleapis/google-auth-library-nodejs/commit/4803e3c))

### [4.2.1](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.2.0...v4.2.1) (2019-06-14)


### Bug Fixes

* **docs:** move to new client docs URL ([#733](https://www.github.com/googleapis/google-auth-library-nodejs/issues/733)) ([cfbbe2a](https://www.github.com/googleapis/google-auth-library-nodejs/commit/cfbbe2a))

## [4.2.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.1.0...v4.2.0) (2019-06-05)


### Bug Fixes

* pad base64 strings for base64js ([#722](https://www.github.com/googleapis/google-auth-library-nodejs/issues/722)) ([81e0a23](https://www.github.com/googleapis/google-auth-library-nodejs/commit/81e0a23))


### Features

* make both crypto implementations support sign ([#727](https://www.github.com/googleapis/google-auth-library-nodejs/issues/727)) ([e445fb3](https://www.github.com/googleapis/google-auth-library-nodejs/commit/e445fb3))

## [4.1.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v4.0.0...v4.1.0) (2019-05-29)


### Bug Fixes

* **deps:** update dependency google-auth-library to v4 ([#705](https://www.github.com/googleapis/google-auth-library-nodejs/issues/705)) ([2b13344](https://www.github.com/googleapis/google-auth-library-nodejs/commit/2b13344))


### Features

* use X-Goog-Api-Key header ([#719](https://www.github.com/googleapis/google-auth-library-nodejs/issues/719)) ([35471d0](https://www.github.com/googleapis/google-auth-library-nodejs/commit/35471d0))

## [4.0.0](https://www.github.com/googleapis/google-auth-library-nodejs/compare/v3.1.2...v4.0.0) (2019-05-08)


### Bug Fixes

* **deps:** update dependency arrify to v2 ([#684](https://www.github.com/googleapis/google-auth-library-nodejs/issues/684)) ([1757ee2](https://www.github.com/googleapis/google-auth-library-nodejs/commit/1757ee2))
* **deps:** update dependency gaxios to v2 ([#681](https://www.github.com/googleapis/google-auth-library-nodejs/issues/681)) ([770ad2f](https://www.github.com/googleapis/google-auth-library-nodejs/commit/770ad2f))
* **deps:** update dependency gcp-metadata to v2 ([#701](https://www.github.com/googleapis/google-auth-library-nodejs/issues/701)) ([be20528](https://www.github.com/googleapis/google-auth-library-nodejs/commit/be20528))
* **deps:** update dependency gtoken to v3 ([#702](https://www.github.com/googleapis/google-auth-library-nodejs/issues/702)) ([2c538e5](https://www.github.com/googleapis/google-auth-library-nodejs/commit/2c538e5))
* re-throw original exception and preserve message in compute client ([#668](https://www.github.com/googleapis/google-auth-library-nodejs/issues/668)) ([dffd1cc](https://www.github.com/googleapis/google-auth-library-nodejs/commit/dffd1cc))
* surface original stack trace and message with errors ([#651](https://www.github.com/googleapis/google-auth-library-nodejs/issues/651)) ([8fb65eb](https://www.github.com/googleapis/google-auth-library-nodejs/commit/8fb65eb))
* throw on missing refresh token in all cases ([#670](https://www.github.com/googleapis/google-auth-library-nodejs/issues/670)) ([0a02946](https://www.github.com/googleapis/google-auth-library-nodejs/commit/0a02946))
* throw when adc cannot acquire a projectId ([#658](https://www.github.com/googleapis/google-auth-library-nodejs/issues/658)) ([ba48164](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ba48164))
* **deps:** update dependency semver to v6 ([#655](https://www.github.com/googleapis/google-auth-library-nodejs/issues/655)) ([ec56c88](https://www.github.com/googleapis/google-auth-library-nodejs/commit/ec56c88))


### Build System

* upgrade engines field to >=8.10.0 ([#686](https://www.github.com/googleapis/google-auth-library-nodejs/issues/686)) ([377d5c6](https://www.github.com/googleapis/google-auth-library-nodejs/commit/377d5c6))


### Features

* support scopes on compute credentials ([#642](https://www.github.com/googleapis/google-auth-library-nodejs/issues/642)) ([1811b7f](https://www.github.com/googleapis/google-auth-library-nodejs/commit/1811b7f))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#686)

## v3.1.2

03-22-2019 15:38 PDT

### Implementation Changes
- fix: getCredential(): load credentials with getClient() ([#648](https://github.com/google/google-auth-library-nodejs/pull/648))

### Internal / Testing Changes
- chore: publish to npm using wombat ([#645](https://github.com/google/google-auth-library-nodejs/pull/645))

## v3.1.1

03-18-2019 08:32 PDT

### Bug Fixes
- fix: Avoid loading fast-text-encoding if not in browser environment ([#627](https://github.com/google/google-auth-library-nodejs/pull/627))

### Dependencies
- fix(deps): update dependency gcp-metadata to v1 ([#632](https://github.com/google/google-auth-library-nodejs/pull/632))

### Documentation
- docs: update links in contrib guide ([#630](https://github.com/google/google-auth-library-nodejs/pull/630))

### Internal / Testing Changes
- build: use per-repo publish token ([#641](https://github.com/google/google-auth-library-nodejs/pull/641))
- build: Add docuploader credentials to node publish jobs ([#639](https://github.com/google/google-auth-library-nodejs/pull/639))
- build: use node10 to run samples-test, system-test etc ([#638](https://github.com/google/google-auth-library-nodejs/pull/638))
- build: update release configuration
- chore(deps): update dependency @types/lru-cache to v5 ([#635](https://github.com/google/google-auth-library-nodejs/pull/635))
- chore(deps): update dependency mocha to v6
- chore: fix lint ([#631](https://github.com/google/google-auth-library-nodejs/pull/631))
- build: use linkinator for docs test ([#628](https://github.com/google/google-auth-library-nodejs/pull/628))
- chore(deps): update dependency @types/tmp to ^0.0.34 ([#629](https://github.com/google/google-auth-library-nodejs/pull/629))
- build: create docs test npm scripts ([#625](https://github.com/google/google-auth-library-nodejs/pull/625))
- build: test using @grpc/grpc-js in CI ([#624](https://github.com/google/google-auth-library-nodejs/pull/624))

## v3.1.0

02-08-2019 08:29 PST

### Bug fixes
- fix: use key file when fetching project id ([#618](https://github.com/googleapis/google-auth-library-nodejs/pull/618))
- fix: Throw error if there is no refresh token despite the necessity of refreshing ([#605](https://github.com/googleapis/google-auth-library-nodejs/pull/605))

### New Features
- feat: allow passing constructor options to getClient ([#611](https://github.com/googleapis/google-auth-library-nodejs/pull/611))

### Documentation
- docs: update contributing path in README ([#621](https://github.com/googleapis/google-auth-library-nodejs/pull/621))
- chore: move CONTRIBUTING.md to root ([#619](https://github.com/googleapis/google-auth-library-nodejs/pull/619))
- docs: add lint/fix example to contributing guide ([#615](https://github.com/googleapis/google-auth-library-nodejs/pull/615))
- docs: use the People API for samples ([#609](https://github.com/googleapis/google-auth-library-nodejs/pull/609))

### Internal / Testing Changes
- chore(deps): update dependency typescript to ~3.3.0 ([#612](https://github.com/googleapis/google-auth-library-nodejs/pull/612))
- chore(deps): update dependency eslint-config-prettier to v4 ([#604](https://github.com/googleapis/google-auth-library-nodejs/pull/604))
- build: ignore googleapis.com in doc link check ([#602](https://github.com/googleapis/google-auth-library-nodejs/pull/602))
- chore(deps): update dependency karma to v4 ([#603](https://github.com/googleapis/google-auth-library-nodejs/pull/603))

## v3.0.1

01-16-2019 21:04 PST

### Bug Fixes
- fix(deps): upgrade to the latest gaxios ([#596](https://github.com/googleapis/google-auth-library-nodejs/pull/596))

## v3.0.0

01-16-2019 10:00 PST

Welcome to 3.0 🎉  This release has it all.  New features, bug fixes, breaking changes, performance improvements - something for everyone!  The biggest addition to this release is support for the browser via Webpack.

**This release has breaking changes.**  This release has a few breaking changes. These changes are unlikely to affect most clients.

#### BREAKING: Migration from `axios` to `gaxios`
The 2.0 version of this library used the [axios](https://github.com/axios/axios) library for making HTTP requests. In the 3.0 release, this has been replaced by a *mostly* API compatible library [gaxios](https://github.com/JustinBeckwith/gaxios). The new request library natively supports proxies, and comes with a smaller dependency chain. While this is mostly an implementation detail, the `request` method was directly exposed via the `GoogleAuth.request` and `OAuth2Client.request` methods.  The gaxios library aims to provide an API compatible implementation of axios, but that can never be 100% promised.  If you run into bugs or differences that cause issues - please do let us know.

#### BREAKING: `generateCodeVerifier` is now `generateCodeVerifierAsync`
The `OAuth2Client.generateCodeVerifier` method has been replaced by the `OAuth2Client.generateCodeVerifierAsync` method.  It has changed from a synchronous method to an asynchronous method to support async browser crypto APIs required for Webpack support.

#### BREAKING: `verifySignedJwtWithCerts` is now `verifySignedJwtWithCertsAsync`
The `OAuth2Client.verifySignedJwtWithCerts` method has been replaced by the `OAuth2Client.verifySignedJwtWithCertsAsync` method. It has changed from a synchronous method to an asynchronous method to support async browser crypto APIs required for Webpack support.


### New Features
- feat: make it webpackable ([#371](https://github.com/google/google-auth-library-nodejs/pull/371))

### Bug Fixes
- fix: accept lowercase env vars ([#578](https://github.com/google/google-auth-library-nodejs/pull/578))

### Dependencies
- chore(deps): update gtoken ([#592](https://github.com/google/google-auth-library-nodejs/pull/592))
- fix(deps): upgrade to gcp-metadata v0.9.3 ([#586](https://github.com/google/google-auth-library-nodejs/pull/586))

### Documentation
- docs: update bug report link ([#585](https://github.com/google/google-auth-library-nodejs/pull/585))
- docs: clarify access and refresh token docs ([#577](https://github.com/google/google-auth-library-nodejs/pull/577))

### Internal / Testing Changes
- refactor(deps): use `gaxios` for HTTP requests instead of `axios` ([#593](https://github.com/google/google-auth-library-nodejs/pull/593))
- fix: some browser fixes ([#590](https://github.com/google/google-auth-library-nodejs/pull/590))
- chore(deps): update dependency ts-loader to v5 ([#588](https://github.com/google/google-auth-library-nodejs/pull/588))
- chore(deps): update dependency karma to v3 ([#587](https://github.com/google/google-auth-library-nodejs/pull/587))
- build: check broken links in generated docs ([#579](https://github.com/google/google-auth-library-nodejs/pull/579))
- chore(deps): drop unused dep on typedoc ([#583](https://github.com/google/google-auth-library-nodejs/pull/583))
- build: add browser test running on Kokoro ([#584](https://github.com/google/google-auth-library-nodejs/pull/584))
- test: improve samples and add tests ([#576](https://github.com/google/google-auth-library-nodejs/pull/576))

## v2.0.2

12-16-2018 10:48 PST

### Fixes
- fix(types): export GCPEnv type ([#569](https://github.com/google/google-auth-library-nodejs/pull/569))
- fix: use post for token revocation ([#524](https://github.com/google/google-auth-library-nodejs/pull/524))

### Dependencies
- fix(deps): update dependency lru-cache to v5 ([#541](https://github.com/google/google-auth-library-nodejs/pull/541))

### Documentation
- docs: add ref docs again ([#553](https://github.com/google/google-auth-library-nodejs/pull/553))
- docs: clean up the readme ([#554](https://github.com/google/google-auth-library-nodejs/pull/554))

### Internal / Testing Changes
- chore(deps): update dependency @types/sinon to v7 ([#568](https://github.com/google/google-auth-library-nodejs/pull/568))
- refactor: use execa for install tests, run eslint on samples ([#559](https://github.com/google/google-auth-library-nodejs/pull/559))
- chore(build): inject yoshi automation key ([#566](https://github.com/google/google-auth-library-nodejs/pull/566))
- chore: update nyc and eslint configs ([#565](https://github.com/google/google-auth-library-nodejs/pull/565))
- chore: fix publish.sh permission +x ([#563](https://github.com/google/google-auth-library-nodejs/pull/563))
- fix(build): fix Kokoro release script ([#562](https://github.com/google/google-auth-library-nodejs/pull/562))
- build: add Kokoro configs for autorelease ([#561](https://github.com/google/google-auth-library-nodejs/pull/561))
- chore: always nyc report before calling codecov ([#557](https://github.com/google/google-auth-library-nodejs/pull/557))
- chore: nyc ignore build/test by default ([#556](https://github.com/google/google-auth-library-nodejs/pull/556))
- chore(build): update the prettier and renovate config ([#552](https://github.com/google/google-auth-library-nodejs/pull/552))
- chore: update license file ([#551](https://github.com/google/google-auth-library-nodejs/pull/551))
- fix(build): fix system key decryption ([#547](https://github.com/google/google-auth-library-nodejs/pull/547))
- chore(deps): update dependency typescript to ~3.2.0 ([#546](https://github.com/google/google-auth-library-nodejs/pull/546))
- chore(deps): unpin sinon ([#544](https://github.com/google/google-auth-library-nodejs/pull/544))
- refactor: drop non-required modules ([#542](https://github.com/google/google-auth-library-nodejs/pull/542))
- chore: add synth.metadata ([#537](https://github.com/google/google-auth-library-nodejs/pull/537))
- fix: Pin @types/sinon to last compatible version ([#538](https://github.com/google/google-auth-library-nodejs/pull/538))
- chore(deps): update dependency gts to ^0.9.0 ([#531](https://github.com/google/google-auth-library-nodejs/pull/531))
- chore: update eslintignore config ([#530](https://github.com/google/google-auth-library-nodejs/pull/530))
- chore: drop contributors from multiple places ([#528](https://github.com/google/google-auth-library-nodejs/pull/528))
- chore: use latest npm on Windows ([#527](https://github.com/google/google-auth-library-nodejs/pull/527))
- chore: update CircleCI config ([#523](https://github.com/google/google-auth-library-nodejs/pull/523))
- chore: include build in eslintignore ([#516](https://github.com/google/google-auth-library-nodejs/pull/516))

## v2.0.1

### Implementation Changes
- fix: verifyIdToken will never return null ([#488](https://github.com/google/google-auth-library-nodejs/pull/488))
- Update the url to application default credentials ([#470](https://github.com/google/google-auth-library-nodejs/pull/470))
- Update omitted parameter 'hd' ([#467](https://github.com/google/google-auth-library-nodejs/pull/467))

### Dependencies
- chore(deps): update dependency nock to v10 ([#501](https://github.com/google/google-auth-library-nodejs/pull/501))
- chore(deps): update dependency sinon to v7 ([#502](https://github.com/google/google-auth-library-nodejs/pull/502))
- chore(deps): update dependency typescript to v3.1.3 ([#503](https://github.com/google/google-auth-library-nodejs/pull/503))
- chore(deps): update dependency gh-pages to v2 ([#499](https://github.com/google/google-auth-library-nodejs/pull/499))
- chore(deps): update dependency typedoc to ^0.13.0 ([#497](https://github.com/google/google-auth-library-nodejs/pull/497))

### Documentation
- docs: Remove code format from Application Default Credentials ([#483](https://github.com/google/google-auth-library-nodejs/pull/483))
- docs: replace google/ with googleapis/ in URIs ([#472](https://github.com/google/google-auth-library-nodejs/pull/472))
- Fix typo in readme ([#469](https://github.com/google/google-auth-library-nodejs/pull/469))
- Update samples and docs for 2.0 ([#459](https://github.com/google/google-auth-library-nodejs/pull/459))

### Internal / Testing Changes
- chore: update issue templates ([#509](https://github.com/google/google-auth-library-nodejs/pull/509))
- chore: remove old issue template ([#507](https://github.com/google/google-auth-library-nodejs/pull/507))
- build: run tests on node11 ([#506](https://github.com/google/google-auth-library-nodejs/pull/506))
- chore(build): drop hard rejection and update gts in the kitchen test ([#504](https://github.com/google/google-auth-library-nodejs/pull/504))
- chores(build): do not collect sponge.xml from windows builds ([#500](https://github.com/google/google-auth-library-nodejs/pull/500))
- chores(build): run codecov on continuous builds ([#495](https://github.com/google/google-auth-library-nodejs/pull/495))
- chore: update new issue template ([#494](https://github.com/google/google-auth-library-nodejs/pull/494))
- build: fix codecov uploading on Kokoro ([#490](https://github.com/google/google-auth-library-nodejs/pull/490))
- test: move kitchen sink tests to system-test ([#489](https://github.com/google/google-auth-library-nodejs/pull/489))
- Update kokoro config ([#482](https://github.com/google/google-auth-library-nodejs/pull/482))
- fix: export additional typescript types ([#479](https://github.com/google/google-auth-library-nodejs/pull/479))
- Don't publish sourcemaps ([#478](https://github.com/google/google-auth-library-nodejs/pull/478))
- test: remove appveyor config ([#477](https://github.com/google/google-auth-library-nodejs/pull/477))
- Enable prefer-const in the eslint config ([#473](https://github.com/google/google-auth-library-nodejs/pull/473))
- Enable no-var in eslint ([#471](https://github.com/google/google-auth-library-nodejs/pull/471))
- Update CI config ([#468](https://github.com/google/google-auth-library-nodejs/pull/468))
- Retry npm install in CI ([#465](https://github.com/google/google-auth-library-nodejs/pull/465))
- Update Kokoro config ([#462](https://github.com/google/google-auth-library-nodejs/pull/462))

## v2.0.0

Well hello 2.0 🎉  **This release has multiple breaking changes**.   It also has a lot of bug fixes.

### Breaking Changes

#### Support for node.js 4.x and 9.x has been dropped
These versions of node.js are no longer supported.

#### The `getRequestMetadata` method has been deprecated
The `getRequestMetadata` method has been deprecated on the `IAM`, `OAuth2`, `JWT`, and `JWTAccess` classes.  The `getRequestHeaders` method should be used instead.  The methods have a subtle difference:  the `getRequestMetadata` method returns an object with a headers property, which contains the authorization header.  The `getRequestHeaders` method simply returns the headers.

##### Old code
```js
const client = await auth.getClient();
const res = await client.getRequestMetadata();
const headers = res.headers;
```

##### New code
```js
const client = await auth.getClient();
const headers = await client.getRequestHeaders();
```

#### The `createScopedRequired` method has been deprecated
The `createScopedRequired` method has been deprecated on multiple classes.  The `createScopedRequired` and `createScoped` methods on the `JWT` class were largely in place to help inform clients when scopes were required in an application default credential scenario.  Instead of checking if scopes are required after creating the client, instead scopes should just be passed either into the `GoogleAuth.getClient` method, or directly into the `JWT` constructor.

##### Old code
```js
auth.getApplicationDefault(function(err, authClient) {
   if (err) {
     return callback(err);
   }
  if (authClient.createScopedRequired && authClient.createScopedRequired()) {
    authClient = authClient.createScoped([
      'https://www.googleapis.com/auth/cloud-platform'
    ]);
  }
  callback(null, authClient);
});
```

##### New code
```js
const client = await auth.getClient({
  scopes: ['https://www.googleapis.com/auth/cloud-platform']
});
```

#### Deprecate `refreshAccessToken`

_Note: `refreshAccessToken` is no longer deprecated._

`getAccessToken`, `getRequestMetadata`, and `request` methods will all refresh the token if needed automatically.

You should not need to invoke `refreshAccessToken` directly except in [certain edge-cases](https://github.com/googleapis/google-auth-library-nodejs/issues/575).

### Features
- Set private_key_id in JWT access token header like other google auth libraries. (#450)

### Bug Fixes
- fix: support HTTPS proxies (#405)
- fix: export missing interfaces (#437)
- fix: Use new auth URIs (#434)
- docs: Fix broken link (#423)
- fix: surface file read streams (#413)
- fix: prevent unhandled rejections by avoid .catch (#404)
- fix: use gcp-metadata for compute credentials (#409)
- Add Code of Conduct
- fix: Warn when using user credentials from the Cloud SDK (#399)
- fix: use `Buffer.from` instead of `new Buffer` (#400)
- fix: Fix link format in README.md (#385)

### Breaking changes
- chore: deprecate getRequestMetadata (#414)
- fix: deprecate the `createScopedRequired` methods (#410)
- fix: drop support for node.js 4.x and 9.x (#417)
- fix: deprecate the `refreshAccessToken` methods (#411)
- fix: deprecate the `getDefaultProjectId` method (#402)
- fix: drop support for node.js 4 (#401)

### Build / Test changes
- Run synth to make build tools consistent (#455)
- Add a package.json for samples and cleanup README (#454)
- chore(deps): update dependency typedoc to ^0.12.0 (#453)
- chore: move examples => samples + synth (#448)
- chore(deps): update dependency nyc to v13 (#452)
- chore(deps): update dependency pify to v4 (#447)
- chore(deps): update dependency assert-rejects to v1 (#446)
- chore: ignore package-lock.json (#445)
- chore: update renovate config (#442)
- chore(deps): lock file maintenance (#443)
- chore: remove greenkeeper badge (#440)
- test: throw on deprecation
- chore: add intelli-espower-loader for running tests (#430)
- chore(deps): update dependency typescript to v3 (#432)
- chore(deps): lock file maintenance (#431)
- test: use strictEqual in tests (#425)
- chore(deps): lock file maintenance (#428)
- chore: Configure Renovate (#424)
- chore: Update gts to the latest version 🚀 (#422)
- chore: update gcp-metadata for isAvailable fix (#420)
- refactor: use assert.reject in the tests (#415)
- refactor: cleanup types for certificates (#412)
- test: run tests with hard-rejection (#397)
- cleanup: straighten nested try-catch (#394)
- test: getDefaultProjectId should prefer config (#388)
- chore(package): Update gts to the latest version 🚀 (#387)
- chore(package): update sinon to version 6.0.0 (#386)

## Upgrading to 1.x
The `1.x` release includes a variety of bug fixes, new features, and breaking changes. Please take care, and see [the release notes](https://github.com/googleapis/google-auth-library-nodejs/releases/tag/v1.0.0) for a list of breaking changes, and the upgrade guide.
