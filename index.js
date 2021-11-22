// to create new file in this folder simply ue command type nul > index.js

// first initialize nodejs in our folder using command npm init through termuinal for crating package.json file to store diffenet dependencies
// install express js using command npm i express
// then we will instll nodemon for better performnce

// to create xpress app we first ned to reque it 
const express= require('express');

// then we will call this function  
const app= express();

//we will start out routing 
app.get('/',(req,res)=>res.send('you are on home page '));

app.get('/about',(req,res)=>res.send('your are on about page '));


// then we will listen this on a port 8000 her We don't need to mention ip address
app.listen(8000, () => console.log('sever iS listening '));

