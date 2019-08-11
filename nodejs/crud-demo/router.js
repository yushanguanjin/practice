/*
    router.js路由模块
    职责;
    处理路由
    根据不同的请求方法+请求路径设置具体请求
*/
const fs = require('fs');
const express = require('express');
const Student = require('./students');
//express提供的方式
const router = express.Router();

// Student.updateById({
//     id: 1,
//     name: '张小三',

// }, function(err) {
//     //console.log(10)
// })
router.get('/students', function(req, res) {
    //readFile的第二个参数是可选的，文件读取的是字符串，传入utf8就是告诉它把读取到的文件直接按照utf8编码转成我们认识的字符
    //除了这样转换之外，也可以通过data.toSting()的方式
    // fs.readFile('./db.json', 'utf8', function(err, data) {
    //     if (err) {
    //         throw err
    //     }
    //console.log(data);
    console.log(Student);
    Student.find(function(err, students) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('./index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '菠萝'
            ],
            students: students
        })
    })
});
router.get('/students/new', function(req, res) {
    //readFile的第二个参数是可选的，文件读取的是字符串，传入utf8就是告诉它把读取到的文件直接按照utf8编码转成我们认识的字符
    //除了这样转换之外，也可以通过data.toSting()的方式

    res.render('./new.html');
});
router.post('/students/new', function(req, res) {
    var student = req.body;
    Student.save(student, function(err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })

    console.log(req.body);
});
router.get('/students/edit', function(req, res) {
    Student.findById(Number(req.query.id), function(err, student) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('edit.html', {
            student: student
        })
    })
});
router.post('/students/edit', function(req, res) {
    Student.updateById(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })
});
module.exports = router;