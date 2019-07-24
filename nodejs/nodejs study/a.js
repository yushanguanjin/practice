var http = require('http'); //请求nodejs自带的http模块，并赋值给http变量

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' }); //协议头
    if (request.url !== "/favicon.ico") { //清除第2此访问 
        console.log("访问");
        response.write("node.js");
        // 发送响应数据 "H  ello World"
        response.end('Hello World\n'); //不写则没有http协议尾,但写了会产生两次访问 
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


var http = require("http");
http.createServer(function(req, res) {
    res.writeHead(200, )

}).listen(8000);