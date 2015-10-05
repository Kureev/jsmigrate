const jscodeshift = require('jscodeshift');

function parseFunctionParams(params) {
  return params.map((p) => p.name);
}

function findFunctionId(node) {
  const parent = node.parentPath.value;
  var id;

  switch (parent.type) {
    case 'Property':
      id = parent.key.name;
      break;
    case 'VariableDeclarator':
      id = parent.id.name;
      break;
    default:
      throw Error('Unable to detect function name');
  }

  return id;
}

function makeFunctionsTable() {
  const table = {};
  this.find(jscodeshift.Function)
    .forEach((node) => {
      var id = node.value.id;
      if (id) {
        table[id.name] = parseFunctionParams(node.value.params);
      } else {
        id = findFunctionId(node);
        table[id] = parseFunctionParams(node.value.params);
      }
    });
  return table;
}

module.exports = {
  makeFunctionsTable: makeFunctionsTable,
};
