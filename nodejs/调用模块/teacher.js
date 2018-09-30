var User = require("./user");

function Teacher(name, age) {
    User.call(this, name, age);
    this.teach = function(res) {
        res.write(this.name + '在讲课');
    }
}
module.exports = Teacher;