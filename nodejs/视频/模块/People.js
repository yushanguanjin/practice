function People(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
People.prototype.say = function() {
        console.log(this.name + this.age + this.sex);
    }
    //可以在一个js文件中，描述一个类，用module.export=构造函数名的方式向外暴露一个类
module.exports = People;