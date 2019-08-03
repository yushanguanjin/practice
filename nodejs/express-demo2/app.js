var express = require('express');
var app = express();

// 配置使用art-template模板引擎
// 第一个参数表示当渲染以.art结尾的文件的时候，使用art-template模板引擎，
// express-art-template是专门用来在express中把art-template整合到express中，
// 虽然外面这里不要需要记载art-template但是也必须安装
// 原因就在于express-art-template依赖了art-template
app.engine('art', require('express-art-template'));
/*express为response响应对象提供了一个方法：render,render方法默认是不可用的，但是如果配置了模板引擎就可以使用了
res.render('html模板名',{模板数据})
第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
也就是说express有一个约定，开发人员把所有的视图文件都放到views目录中
*/


// 如果想要修改默认的views目录，则可以
//app.set('views',render函数的默认路径)
app.get('/', function(req, res) {
    res.render('404.art', {
        title: '页面'
    })
});
app.listen(3000, function(req, res) {
    console.log('express-demo2');
})