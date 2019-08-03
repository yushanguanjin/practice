const express = require('express');
const app = express(); //相当于原来的http.createServer

//当服务器收到get请求/的时候，执行回调函数
app.get('/', function(req, res) {
    res.send('a')
})
app.get('/about', function(req, res) {
    res.send('about')
})

//只要这样做，就可以通过/public/xx的方式访问public目录中的所有资源了
app.use('/public/', express.static('./public/'));
//当省略第一个参数的时候，则可以通过省略/public的方式来
app.use(express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));
//相当于server.listen
app.listen(3000, function() {
    console.log('app');
})