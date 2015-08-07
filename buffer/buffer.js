const Buffer = require('buffer').Buffer;
const ab = new ArrayBuffer(16);
var buf = new Buffer(ab); // Buffer constructor accepts ArrayBuffer.

console.log(buf instanceof Uint8Array); // true
console.log(buf instanceof Buffer); // true

buf.writeUInt32BE(0x61626364, 0);

console.log(buf.toString()); //abcd
