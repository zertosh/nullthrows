'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

exports.default = function nullthrows(x, message) {
  if (x != null) {
    return x;
  }
  var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);
  error.framesToPop = 1; // Skip nullthrows's own stack frame.
  throw error;
};
