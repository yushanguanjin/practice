var http = require("http");
var otherFunc = require('./c');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url !== "/favicon.ico") {
        console.log("打印");
        funcName = "func2";
        otherFunc[funcName](res);
        res.end("node.js");
    }

}).listen(8000);