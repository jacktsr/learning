var http = require('http');

//create server
http.createServer(function (req, res){
  res.write('Hello world!'); // Write a response to client
  res.end();  //end the response
}).listen(8080);
