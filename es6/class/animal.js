// strict mode needed
'use strict';

class Animal {
  constructor(name) {
    this.name = name
  }
  
  say() {
    // unimplemented
  }
}

class Cat extends Animal {
  say() {
    console.log(`${this.name} < meow`);
  }
}

var cat = new Cat('Mike');
cat.say();
