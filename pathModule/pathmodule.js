const path = require('path');

// console.log(path.dirname('D:\NODE\pathModule\pathmodule.js'))
// console.log(path.extname('D:\NODE\pathModule\pathmodule.js'))

const mypath= path.parse('D:\NODE\pathModule\pathmodule.js')
// console.log(mypath)
console.log(mypath.root)
console.log(mypath.name)
console.log(mypath.base)
console.log(mypath.ext)