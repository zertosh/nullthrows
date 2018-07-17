/* @flow */

import nullthrows from '../../..';

var obj = ({}: ?Object);

var ok1 = nullthrows(obj);
var ok2 = nullthrows(null);
var ok3 = nullthrows(null, 'my error message');

var bad1: Object = obj;
