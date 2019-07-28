var http = require('http');
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    var pathname = url.parse(req.url).pathname;
    var fileURL = './' + path.normalize('./static/' + pathname);
    fs.readFile(fileURL, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html;charset=UTF8' });

            res.end('404,页面没有找到');
        }
        var minme = getMime(extname);
        res.writeHead(200, { 'Content-type': 'text/html;charset=UTF8' });

        res.end(data);
        console.log(data);
    })

})
server.listen(4000, '192.168.1.13');


function getMime(extname) {
    fs.readFile('./mime.json', function() {
        if (err) {
            throw err;
        }
        var mimeJson = JSON.parse(data);
        return mimeJson[extname];
    })
}