const { Console } = require('console');
const os= require('os');

// to now the architeechture 
console.log(os.arch());

//to know the memory
console.log(`${os.freemem()/1024/1024/1024}`);
console.log(`${os.totalmem()/1024/1024/1024}`);

//to know the diectory 
console.log(os.hostname());

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.release());