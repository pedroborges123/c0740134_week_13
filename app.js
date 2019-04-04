console.log('start..');

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url == "/test"){
        res.write("Teste... ");

    }else if(req.url == "/brasil"){
        res.write("Brasil... ");
    }
    console.log(req.url);
    res.end();
}).listen(8080);