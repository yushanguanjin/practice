//类型注解
function greeter(person) {
    return "Hello, " + person;
}
var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter2(user2);
