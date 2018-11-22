var optfile = require("./optfile");

module.exports = {
    login: function(req, res) {
        optfile.readfileSync("./view/login.html");
    },
    register: function(req, res) {
        optfile.readfile("./view/register.html");
    }
}