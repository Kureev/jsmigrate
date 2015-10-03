const fs = require('fs');
const path = require('path');
const recast = require('recast');

const source = fs.readFileSync(path.join('test', 'fixtures', 'react.class.js'), 'utf8');
const target = source.replace(/\d+/g, 'test');

const sourceAST = recast.parse(source);
const functions = [];

recast.visit(sourceAST, {
  visitFunction: function visitFunction(p) {
    if (p.node.id) {
      functions[p.node.id.name] = p.node.params;
    }

    return false;
  },
});

console.log(functions);
