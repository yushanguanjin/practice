let http = require('http');
let fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
        //两个参数，第一个是完整路径，当前目录写./
        //两个参数，就是回调函数，表示文件读取成功之后，做的事情
    fs.readFile('./test.txt', function(err, data) {
        if (err) {
            throw err;
        }
        console.log(1);
        res.end(data);
    })
    console.log(2);
});
server.listen(2001)