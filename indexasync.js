const { Console } = require('console');
// const fs= require('fs');
// fs.mkdir('async node', (err)=> console.log('FILE CEATED')); --> used to create file in async way

// callback function --> when a function is passed indise async method --> usually async method must have a call back function which shows what to do after performing the first two agument passed in async function 


// used tomcreate file using async method 
// fs.writeFile("async node/fileasync.txt",'this file is ceated using async method ', err=>console.log('file created')); 


//used to delete file 
// fs.unlink('async node/fileasync.txt',er=> console.log('file deleted'));


// read file in async way  in tow way 
// method1
// fs.readFile("async node/fileasync.txt", (err, data)=>console.log(data.toString()));
// method 2
// fs.readFile("async node/fileasync.txt", 'UTF-8', (err, data)=>console.log(err));

            /* challenge timee */

const fs= require('fs');

// fs.writeFile('async node/async.txt', 'this is callenge time of async file ', err=> console.log('file created '))

// fs.appendFile('async node/async.txt','. this is appended', err=> console.log('file appended'));

// fs.readFile('async node/async.txt','UTF-8', (err,data)=>console.log(data));

// fs.readFile('async node/async.txt',(err, data)=>console.log(data.toString()));

// fs.rename('async node/async.txt','async node/newasync.txt', err=> console.log('file name changed'));

// fs.unlink('async node/newasync.txt',err=>console.log('file deleted'));
// fs.mkdir('pathModule', err=> console.log('folder created'));

// fs.writeFile('pathModule/pathmodule.js','THIS IS CREATED  in path module ', err => console.log('file created '));

// fs.mkdir('exportimport', err => console.log('folder created '));

// fs.writeFile('exportimport/index.js','this is main file',err=> console.log('file created'));
// fs.writeFile('exportimport/operation.js','this is main file',err=> console.log('file created'));

// fs.mkdir('./npmmod', err=> console.log('folder created'))
//  fs.writeFile('./npmmod/index.js','this is ceated inside npm module', err=> console.log('file created'))
// fs.mkdir('http server', err=> console.log('folder created'));
// fs.writeFile('http server/index.js','this is http sever', err=> console.log('file created'));
// fs.mkdir('JASON',err=> console.log('folder created'));
// fs.writeFile('JASON/index.js','this file is inside jaon folder', err=> console.log('file created'));
// fs.mkdir('userapi', err=> console.log('folder created'));
// fs.writeFile('userapi/json2.json', '', er=> console.log('file ceat
// console.log({__dirname})

// fs.mkdir('EventModules',err=>console.log('folder created'));
// fs.writeFile('EventModules/index.js','',err=>console.log('created'));
// fs.mkdir('streamModule', err=> console.log('folder created'));
// fs.writeFile('streamModule/index.js','',err=>console.log('file created'));
// fs.mkdir('weatherApp',err=>console.log('folder created'));
// fs.writeFile('weatherApp/index.js', '', err=>console.log('file created'));
fs.writeFile('weatherApp/index.html','',err=>console.log('file created'));

