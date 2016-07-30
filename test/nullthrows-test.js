'use strict';

const tap = require('tap');
const nullthrows = require('../').default;

tap.test('return value', t => {
  const obj = {};
  t.equal(nullthrows(obj), obj);
  t.end();
});

tap.test('it does not throw', t => {
  t.doesNotThrow(() => {
    nullthrows('');
  });
  t.doesNotThrow(() => {
    nullthrows(NaN);
  });
  t.doesNotThrow(() => {
    nullthrows(false);
  });

  t.end();
});

tap.test('it throws', t => {
  t.throws(() => {
    nullthrows(null);
  }, new Error('Got unexpected null or undefined'));
  t.throws(() => {
    nullthrows(undefined);
  }, new Error('Got unexpected null or undefined'));
  t.end();
});
