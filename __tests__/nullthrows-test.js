'use strict';

describe('commonjs', () => {
  const nullthrows = require('../');

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
    }).toThrow(new Error('Got unexpected null'));

    expect(() => {
      nullthrows(undefined);
    }).toThrow(new Error('Got unexpected undefined'));

    expect(() => {
      nullthrows(undefined, 'My error message');
    }).toThrow(new Error('My error message'));
  });
});

describe('import interop', () => {
  const interopRequireDefault =
    require('@babel/runtime-corejs2/helpers/interopRequireDefault.js');

  const nullthrows = interopRequireDefault(require('../'));

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
    }).toThrow(new Error('Got unexpected null'));

    expect(() => {
      nullthrows(undefined);
    }).toThrow(new Error('Got unexpected undefined'));

    expect(() => {
      nullthrows(undefined, 'My error message');
    }).toThrow(new Error('My error message'));
  });
});
