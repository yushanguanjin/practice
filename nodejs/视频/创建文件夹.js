let http = require('http');
let fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' })
        //两个参数，第一个是完整路径，当前目录写./
        //两个参数，就是回调函数，表示文件读取成功之后，做的事情
    fs.mkdir('./album/aaaa/bbbb', { recursive: true }, function(err, data) {
        if (err) {
            throw err;
        }
        console.log('创建文件夹');
    });

    fs.readdir('./album', function(err, files) {
        //files是个数组，表示./album这个文件夹中的所有东西，包括文件及文件夹爱
        console.log(files);
    })
    console.log(2);
    res.end();
});
server.listen(2003)