# gcp-metadata
> Get the metadata from a Google Cloud Platform environment.

[![NPM Version][npm-image]][npm-url]
[![codecov][codecov-image]][codecov-url]

```sh
$ npm install --save gcp-metadata
```
```js
const gcpMetadata = require('gcp-metadata');
```

#### Check to see if the metadata server is available
```js
const isAvailable = await gcpMetadata.isAvailable();
```

#### Access all metadata
```js
const data = await gcpMetadata.instance();
console.log(data); // ... All metadata properties
```

#### Access specific properties
```js
const data = await gcpMetadata.instance('hostname');
console.log(data); // ...Instance hostname
const projectId = await gcpMetadata.project('project-id');
console.log(projectId); // ...Project ID of the running instance
```

#### Access nested properties with the relative path
```js
const data = await gcpMetadata.instance('service-accounts/default/email');
console.log(data); // ...Email address of the Compute identity service account
```

#### Access specific properties with query parameters
```js
const data = await gcpMetadata.instance({
  property: 'tags',
  params: { alt: 'text' }
});
console.log(data) // ...Tags as newline-delimited list
```

#### Access with custom headers
```js
await gcpMetadata.instance({
  headers: { 'no-trace': '1' }
}); // ...Request is untraced
```

### Take care with large number valued properties

In some cases number valued properties returned by the Metadata Service may be
too large to be representable as JavaScript numbers. In such cases we return
those values as `BigNumber` objects (from the [bignumber.js][] library). Numbers
that fit within the JavaScript number range will be returned as normal number
values.

```js
const id = await gcpMetadata.instance('id');
console.log(id)  // ... BigNumber { s: 1, e: 18, c: [ 45200, 31799277581759 ] }
console.log(id.toString()) // ... 4520031799277581759
```

[bignumber.js]: https://github.com/MikeMcl/bignumber.js
[codecov-image]: https://codecov.io/gh/googleapis/gcp-metadata/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/googleapis/gcp-metadata
[npm-image]: https://img.shields.io/npm/v/gcp-metadata.svg
[npm-url]: https://www.npmjs.com/package/gcp-metadata
