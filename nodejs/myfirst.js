var http = require('http');
var dt = require('./myfirstmodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current time is :" + dt.myDateTime());
    res.end('');
}).listen(8080);