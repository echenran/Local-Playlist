var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello');
  console.log("testing");
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

var sys = require("sys");
sys.puts("Hello World");