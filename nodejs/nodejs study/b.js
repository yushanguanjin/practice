var http = require('http'); //请求nodejs自带的http模块，并赋值给http变量
var otherFun = require("./c.js");
http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' }); //协议头
    if (request.url !== "/favicon.ico") { //清除第2次访问 
        console.log("访问");

        // func1(response);
        // otherFun.func2(response);
        // otherFun.func3(response);

        funcName = "func2";
        otherFun[funcName](response);
        // 发送响应数据 "Hello World"
        response.end(''); //不写则没有http协议尾,但写了会产生两次访问 
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

function func1(res) {
    res.write("node.js");
}