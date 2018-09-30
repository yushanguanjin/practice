function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log("我是" + this.name);
    }
}
module.exports = User;