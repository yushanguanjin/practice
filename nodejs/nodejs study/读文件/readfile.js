var http = require('http');
var url = require('url');
var router = require('./router');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (req.url !== "/favicon.ico") { //清除第2此访问
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, ''); //正则去URL中的'/'
        console.log(pathname);
        router[pathname](req, res);
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');