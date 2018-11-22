// function func2(res) {
//     res.write("func2");
// }
// module.exports = func2; //只支持一个函数

//支持多个函数
module.exports = {
    func2: function(res) {
        res.write("func2");
    },
    func3: function(res) {
        res.write("func3");
    }
}