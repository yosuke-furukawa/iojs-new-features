var url = require('url');

var p = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

console.log(p);
console.log(p.toJSON());
