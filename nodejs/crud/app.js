const express = require('express');
const fs = require('fs');
const app = express();
app.engine('html', require('express-art-template'));
app.get('/', function(req, res) {
    //readFile的第二个参数是可选的，文件读取的是字符串，传入utf8就是告诉它把读取到的文件直接按照utf8编码转成我们认识的字符
    //除了这样转换之外，也可以通过data.toSting()的方式
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if (err) {
            throw err
        }
        console.log(data);
        res.render('./index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '菠萝'
            ],
            students: JSON.parse(data).students
        })
    })

});
app.listen(6000, function() {
    console.log('localhost：6000')
})