'use strict';
class Cat {
  constructor() {
    this[Symbol.toStringTag] = 'Cat';
  }
}

var cat = new Cat();
console.log(cat.toString()); // [object Cat]

