var foo = require('./foo.js');
var People = require('./People.js');

var a = new People('a', '20', 'man');
a.say();
console.log(foo.msg);