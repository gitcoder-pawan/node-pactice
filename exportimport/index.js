const op = require('./operation')

console.log(op.mul(25,20));
console.log(op.sub(25,20));
console.log(op.add(25,20));
console.log(op.name);

// we can import using object destructring as well and object position in any manner . using this we do not need to write op. again and again .
// const {add, name , mul , sub} = require('./operation');

// console.log(mul(25,20));
// console.log(sub(25,20));
// console.log(add(25,20));
// console.log(name);