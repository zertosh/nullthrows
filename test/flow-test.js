'use strict';

const execFile = require('child_process').execFile;
const path = require('path');
const test = require('tap').test;

const ERROR = `\

index.js:10:20,22: null
This type is incompatible with
index.js:10:11,16: object type

index.js:10:20,22: undefined
This type is incompatible with
index.js:10:11,16: object type

Found 2 errors
`;

test('nullthrows flow', t => {
  t.plan(1);
  // flow check --old-output-format --strip-root
  const flow = require('flow-bin');
  execFile(flow, ['check', '--old-output-format', '--strip-root'], {
    cwd: path.join(__dirname, 'typed-package')
  }, (err, stdout) => {
    t.equal(stdout, ERROR);
  });
});
