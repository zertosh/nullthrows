'use strict';

const path = require('path');
const child_process = require('child_process');

test('nullthrows with flow', () => {
  const ret = child_process.spawnSync(
    'node_modules/.bin/flow',
    ['check', path.join(__dirname, '__fixtures__/flow-package')],
    {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
    }
  );
  expect(ret.stderr).toMatchSnapshot();
  expect(ret.stdout).toMatchSnapshot();
  expect(ret.error).toBeUndefined();
});
