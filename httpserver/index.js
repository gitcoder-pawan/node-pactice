// const http = require('http');
// const server= http.createServer((req,res)=>
// {
//     if (req.url==="/"){
//         res.writeHead(200,{"Content-type":'html'});
//         res.end('<h6>hello from sever sides. This is home page </h6>');

//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"Content-type":'html'});
//         res.end('<h1> This is about page </h1>');
//     }
//     else if(req.url==="/contact"){
//         res.writeHead(200,{"Content-type":'html'});
//         res.end('<h1> This is contact page </h1>');
//     }
//     else {
//         res.writeHead(404,{"Content-type":'html'});
//         res.end('<h1>hello from sever sides. This is 404 error page </h1>');
//     }

    
// })
// server.listen(8000,'127.0.0.1',()=> console.log('srver is running'))

const http = require('http');
const { url } = require('inspector');
const fs= require('fs');

console.log(__dirname)
const data = fs.readFileSync('./JASON/json1.JSON','utf-8');
console.log(data);
const orgdata=JSON.parse(data);
console.log(orgdata);
const server= http.createServer(
    (req, res)=>{
        res.writeHead(200,`"content-type":"application/JSON"`,err=>console.log('thi is json data'))
        res.end(`${data} `)
        
    });

server.listen(8000, '127.0.0.1', ()=>{
    console.log('sever is running ')
});