/* @flow strict */

var nullthrows = require('../../..');

var value = (1: ?number);

var bad1: number = value;
var ok1: number = nullthrows(value);

nullthrows(null);
nullthrows(null, 'my error message');

("this should be an error in strict mode": any);
