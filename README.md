# io.js v3.0 is released!!!!!!!

io.js v3.0 new features.

# ECMAScript 2015 - feature

current V8 version 4.4
previous V8 version 4.2

If you would like to see the changes, see [the following url](https://gist.github.com/rvagg/1f115074cb3c890985bf)

https://gist.github.com/rvagg/1f115074cb3c890985bf

## Computed property names

Computed property names (`{['foo'+'bar']:'bam'}`) are shipped.
No need to specify any `harmony-` flag.

```javascript
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config);
```

```
$ iojs es6/computed_property/computedProps.js
```

## unicode

Unicode escape sequence (`\u{xxxxx}`) is shipped.
No need to specify `--harmony` option.

```javascript
console.log('\u{1F363}'); // 🍣
console.log('\u{1F4A1}'); // 💡
```

```
$ iojs es6/unicode/unicode.js
```

## Array subclass

class is already available, but previous version does not support built-in Array subclass. 

note: we should put 'use strict' on top.

```javascript
// strict mode needed
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
```

previous io.js is also available Array subclass. But they have an [issue](https://code.google.com/p/v8/issues/detail?can=2&q=3930&colspec=ID%20Type%20Status%20Priority%20Owner%20Summary%20HW%20OS%20Area%20Stars&id=3930). v8 fixed the problem.

## Spread operator

Now, we can use `Spread operator (...) `. 
But we need to specify `--es_staging` arguments.

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

```javascript
// Spread operator
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2); // we can use ...
console.log(arr1);
```

```
$ node --es_staging es6/spread_operator/spread.js
```

## Rest parameters

Rest parameters (`function(...args) {}`) are implemented in staging behind the `--es-staging` flag.

```javascript
// Rest parameters
function max(...args) {
  // rest parameter is not Array-like object, that is just array.
  console.log(Array.isArray(args))  // true
  console.log(args.length)          // 6

  var max = args.reduce(function(max, n) { 
    return n > max ? n : max;
  });
  return max;
}

var maxNum = max(5, 15, 10, 1, 4, 5);
console.log(maxNum); // 15
```

```
$ iojs --es_staging es6/rest_params/rest.js
```


# REPL saves history by default

REPL gets a history file. 
In previous version, repl needs to specify `NODE_REPL_HISTORY_FILE`.
But current version, repl saves history by default.

```
$ iojs
> var fs = require('fs');
# Ctrl-D
$ iojs
> var fs = require('fs'); # push up button
```

# Buffer is subclass of Uint8Array

```javascript
const Buffer = require('buffer').Buffer;
const ab = new ArrayBuffer(16);
var buf = new Buffer(ab); // Buffer constructor accepts ArrayBuffer.

console.log(buf instanceof Uint8Array); // true
console.log(buf instanceof Buffer); // true

buf.writeUInt32BE(0x61626364, 0);

console.log(buf.toString()); //abcd
```

# Remove smalloc and Deprecate freelist

`smalloc` module is removed.
`freelist` module is now deprecated.

# Want to know more??

please check the following issue.

https://github.com/nodejs/io.js/blob/master/CHANGELOG.md#2015-08-04-version-300-rvagg
https://github.com/nodejs/io.js/wiki/Breaking-Changes#300-from-2x
