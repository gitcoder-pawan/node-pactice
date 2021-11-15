 const chalk = require('chalk');
 const validator= require('validator')

console.log(`${chalk.red.italic.bgCyanBright('hello wold')} ${chalk.white.bgGreen.inverse('success')} 'this is chalk properties '`);
const mail= "ajhdsbcjhajd@jhdcom";
console.log(validator.isEmail(mail)? chalk.white.bgGreen(mail) : chalk.white.bgRed(mail));

//after installing nodemon globally using command (npm i nodemon g-) its will execute the file automatically in an evionment by writing (nodemon index.js)  in the terminal .To exit from this environment we need to enter (ctrl + c) two times  