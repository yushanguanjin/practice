var http = require('http');
// var User = require("./user.js");
var Teacher = require("./teacher.js");
http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url !== "/favicon.ico") {
        var teach = new Teacher("a", 20);
        teach.sayName();
        teach.teach(res);
        res.end('');
    }
}).listen(8888);


console.log('Server running at http://127.0.0.1:8888/');