const fs= require('fs');

const obj={
    name: "pawan kumar",
    age:21,
    gender:"male",
    height:5.11
}
console.log(obj);

/*
to convert jason into object and vice versa
JSON.stringify(obj) -> it convert object to JSON format 
JSON.parse(obj) -> it convert JSON format data to javascript object 
*/

// const objjson= JSON.stringify(obj);
// console.log(objjson);

// const jsonobj= JSON.parse(objjson);
// console.log(jsonobj)

// const jsonData= JSON.stringify(obj)
// fs.writeFile('json1.JSON',jsonData,err=>console.log('json file created'));

//this json file act as api  

// fs.readFile('json1.JSON','utf-8',(err, data)=> {
//     const orgdata= JSON.parse(data);
//     console.log(data);
//     console.log(orgdata);
// });
