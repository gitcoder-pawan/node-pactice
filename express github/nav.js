
const express = require('express');

//we required path module to store path
const path = require('path');
const staticpath= path.join(__dirname,"public");
console.log(staticpath)
const app = express();
/*
//then we hve used express.static(path) to show static website
// once we hve used this sttement , connection will be lost nd no other statement will be executed except app.listen() statement 
app.use(express.static(staticpath));

*/


// to use handlebarjs first we need to install hbs in pckage.json file using command npm i hbs nd then we need to create views folder in our root directory where file with index.hbs extension will be there
//we will set the view engine , same as declared below
app.set('view engine', 'hbs');

// to change the name of views folder 
app.set('views',path.join(__dirname,'changedviews')) 

// now we route to home pge using hbs
// we have passed the content dynamiclly inside objects.
app.get("",(req,res)=>{
    res.render('index',{
        author:"pawan kumar"
    });
})

//2nd parameter always contain render function
app.get('/about',(req, res)=>{
    res.render('about')
})


// if we use res.jason() method then whatever will be paseeses as parameter then everything will be converted in json formt
// but res.send covert only objects or array of objects in json format 
app.get('/', (req, res)=> {
    res.json(' <h1>HOME page</h1>');
})
app.get('/about', (req, res)=> {
    res.send([{id:1, name:"pawan"}, {id:2,name:'shekhar'}]);
})
app.get('/contact', (req, res)=> {
    res.send('<h1>contact</h1>');
})
app.get("*",(req, res)=>{
    res.render("404")
})
app.listen(8000, () => console.log('server is running'));

