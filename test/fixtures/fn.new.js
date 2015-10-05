function test() {
  const host = 'localhost';
  const port = 8080;
  connect(host, port);
}

function connect(host, port) {
  doSomething(host, port);
}

function test() {
  const host = 'localhost';
  const port = 8080;
  connect({ host: host, port: port, });
}

var variable = function(a, b, c) {};
var arrow = (a) => a;
