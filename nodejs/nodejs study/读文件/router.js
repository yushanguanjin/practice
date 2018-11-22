var optfile = require("./optfile");
module.exports = {
    login: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end("");
        }
        optfile.readfile('./login.html', recall);
    },
    register: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end("");
        }
        optfile.readfile('./register.html', recall);
    }
}