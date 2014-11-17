"use strict";

var Promise = require("es6-promise").Promise;  // jshint ignore: line
var objectAssign = require("object-assign");
var th = require("telehash");

// Reexport telehash module.
objectAssign(module.exports, th);

function wrap(fn) {
  return function() {
    var fnargs = Array.prototype.slice.call(arguments);
    return new Promise(function(resolve, reject) {
      function handler(err, result) {
        if (err) return reject(err);
        resolve(result);
      }

      fnargs.push(handler);
      fn.apply(th, fnargs);
    });
  };
}

// Wrap some functions.
// TODO: Wrap result of the `.mesh` call.
["generate", "mesh"].forEach(function(fname) {
  exports[fname] = wrap(th[fname]);
});
