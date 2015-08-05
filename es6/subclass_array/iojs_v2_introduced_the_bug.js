'use strict';
class Stack extends Array { }
try {
  new Stack();
} catch (e) {
  console.log(e);
}
