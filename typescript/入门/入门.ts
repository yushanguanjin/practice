//类型注解
function greeter(person: string) {
  return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);

//接口
interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter2(user2);
