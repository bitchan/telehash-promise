# telehash-promise [![Build Status](https://travis-ci.org/nekogrid/telehash-promise.svg?branch=master)](https://travis-ci.org/nekogrid/telehash-promise)

Promise wrapper for [telehash-js](https://github.com/telehash/telehash-js). Make all public telehash methods which normally require node-style callback return an ES6-compatible promise instead. Both `telehash` and `denodeify` are peer dependencies.

## Usage

You need ES6 `Promise` and `Object.assign` functions available in order to use this module. Use some ES6 runtime or just apply polyfills:

```js
require("es6-promise").polyfill();
require("object.assign").shim();
```

```js
var th = require("telehash-promise");
// denodeify is also available as th.denodeify

th.generate()
  .then(function(endpoint) {
    // Process endpoint.
  }).catch(function(err) {
    // Process errors.
  });

th.mesh({id})
  .then(function(mesh) {
    // Process mesh.
  }, function(err) {
    // Process error.
  });
```

## License

telehash-promise - telehash promise wrapper

Written in 2014 by Kagami Hiiragi <kagami@genshiken.org>

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
