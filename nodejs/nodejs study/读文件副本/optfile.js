var fs = require("fs");

module.exports = {
    readfileSync: function(path) {
        var data = fs.readdirSync(path, "utf-8");
        console.log(data);
    },
    readfile: function(path) {
        fs.readFile(path, function(err, data) {
            console.log(data);
        })
    }
}