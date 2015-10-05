const fs = require('fs');
const path = require('path');
const jscodeshift = require('jscodeshift');
const jsondiffpatch = require('jsondiffpatch');
const helpers = require('./lib/helpers');

const src = fs.readFileSync(path.join('test', 'fixtures', 'fn.js'), 'utf8');
const target = fs.readFileSync(path.join('test', 'fixtures', 'fn.new.js'), 'utf8');

jscodeshift.registerMethods({
  makeFunctionsTable: helpers.makeFunctionsTable,
});

const sourceTable = jscodeshift(src).makeFunctionsTable();
const targetTable = jscodeshift(target).makeFunctionsTable();

console.log(jsondiffpatch.diff(sourceTable, targetTable));
