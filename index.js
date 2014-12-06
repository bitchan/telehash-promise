"use strict";

require("es6-promise").polyfill();
require("object.assign").shim();

var denodeify = require("denodeify");
var th = require("telehash");

// Reexport telehash module.
Object.assign(module.exports, th);

// Reexport denodeify.
exports.denodeify = denodeify;

// Wrap some telehash functions.
exports.generate = denodeify(th.generate);
// TODO(Kagami): Wrap result of the `.mesh` call.
exports.mesh = denodeify(th.mesh);
