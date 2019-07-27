let http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html;charset=UTF8' });
    res.write('<h1>h1文本</h1>');
    res.end();
}).listen(8000)