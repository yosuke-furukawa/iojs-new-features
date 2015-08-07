'use strict';
class ShuffleArray extends Array {
  shuffle() {
    var l = this.length;
    var i;
    var t;
    while (l) {
      i = Math.floor(Math.random() * l--);
      t = this[l];
      this[l] = this[i];
      this[i] = t;
    }
    return this;
  }
}

var shuffleArray = new ShuffleArray();
shuffleArray.push(1, 2, 3, 4, 5, 6);
console.log(shuffleArray.shuffle()); // shuffled [4, 6, 3, 1, 5, 2]

