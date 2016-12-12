'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

const lintRules = {
    envs: ['node', 'es6'],
    useEslintrc: false,
    rules: conf.rules,
};

const report = new eslint.CLIEngine(lintRules).executeOnFiles([
    'index.js',
    'test/test.js',
]);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
