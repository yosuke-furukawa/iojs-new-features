'use strict';
// class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
 getInfo() {
    let name = this.name;
    let age = this.age;
    let nextAge = this.age + 1;
    // enhanced object literal
    return {
      name,
      age,
      nextAge
    };
  }
}

var bob = new Person('bob', 15);

console.log(bob.getInfo());

