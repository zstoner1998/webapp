var connect  = require('connect');
var static = require('serve-static');

var server = connect();
console.log("Server is running, press controlC to exit");

server.use(  static(__dirname + '/public'));

server.listen(3000);



var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/public");