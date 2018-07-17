'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

exports.default = function nullthrows(x, message) {
  if (x != null) {
    return x;
  }
  throw new Error(message !== undefined ? message : 'Got unexpected null or undefined');
};
