/*
数据操作文件模块
职责：操作文件中的数据，只处理数据，不关心业务
*/
var fs = require('fs');
const dbPath = './db.json';
//获取所有学生列表
/*
    callback中的参数
    成功是null
    错误是错误对象
    第二个参数是结果
    成功是数组
    错误是undefined

*/
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        callback(null, JSON.parse(data).students)
    })


}
exports.findById = function(id, callback) {
        fs.readFile(dbPath, 'utf8', function(err, data) {
            if (err) {
                return callback(err)
            }
            var students = JSON.parse(data).students;
            var ret = students.find(function(item) {
                return item.id === parseInt(id);
            })
            callback(null, ret)
        })


    }
    /*添加保存学生*/
exports.save = function(student, callback) {
        fs.readFile(dbPath, 'utf8', function(err, data) {
            if (err) {
                return callback(err)
            }
            var students = JSON.parse(data).students

            //处理id唯一的，不重复
            student.id = students[students.length - 1].id + 1
            students.push(student);
            var fileData = JSON.stringify({
                students: students
            })
            fs.writeFile(dbPath, fileData, function() {
                if (err) {
                    return callback(err)
                }
                callback(null)
            })

        })
    }
    /*更新学生*/
exports.updateById = function(student, callback) {
    fs.readFile(dbPath, 'utf8', function(err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        student.id = parseInt(student.id)
        var stu = students.find((item) => {
            return item.id === parseInt(student.id);
        })
        Object.assign(stu, student);

        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function() {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}