function test() {
  const host = 'localhost';
  const port = 8080;
  connect(host, port);
}

function connect(options) {
  doSomething(options.host, options.port);
}

function test() {
  const host = 'localhost';
  const port = 8080;
  connect({ host: host, port: port, });
}

var variable = function(a, b) {};
var arrow = (a, b) => {};
