'use strict';

const nullthrows = require('../').default;

test('return value', () => {
  const obj = {};
  expect(nullthrows(obj)).toBe(obj);
});

test('it does not throw', () => {
  expect(() => {
    nullthrows('');
  }).not.toThrow();

  expect(() => {
    nullthrows(NaN);
  }).not.toThrow();

  expect(() => {
    nullthrows(false);
  }).not.toThrow();
});

test('it throws', () => {
  expect(() => {
    nullthrows(null);
  }).toThrow(new Error('Got unexpected null or undefined'));

  expect(() => {
    nullthrows(undefined);
  }).toThrow(new Error('Got unexpected null or undefined'));
});
