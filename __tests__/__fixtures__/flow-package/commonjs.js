/* @flow */

var nullthrows = require('../../..').default;

var obj = ({}: ?Object);

var bad1: Object = obj;
var ok1: Object = nullthrows(obj);

nullthrows(null);
nullthrows(null, 'my error message');
