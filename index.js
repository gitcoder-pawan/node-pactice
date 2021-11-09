// terminal ->node index.js -->will execute the index.js file in terminal(act as console)
// terminal -> node -->will start the node environment in  terminal
// node environment in terminal  ->
// ctrl +d --> finish the multiple line sttemnt 
//  _ -->represent the previous statement val 
// fs+enter --> will return all the method related to fs(file system)
const fs=require('fs');
/*
fs.writeFileSync("file.txt","this is mmy first file"); --> create  new file */
// fs.writeFileSync("file.txt","this is another data in file1") --> override the file data with sme name 
// fs.appendFileSync("file.txt","this is the ppending data in file ") --> appending data in file 
// const bufdata=fs.readFileSync("file.txt") -->this provides buffer data in binary string
// const orgdata= bufdata.toString() --> convert buffer data in string format
// console.log(orgdata)
// fs.renameSync("file.txt","newfile.txt") --> renme the file name


// fs.mkdirSync("node"); --> to crete new folder
// fs.writeFileSync("node/index.js"," this is creted using node js"); --> creating file in nested folder 
// fs.unlinkSync("node/index.js"); --> usd to unlink file in nod js
// fs.unlinkSync("newfile.txt");
// fs.writeFileSync("node/file.txt","this is file1");
// fs.appendFileSync("node/file.txt"," .this is appendd again"); --> if we execute a statement again and again then that operation will be performed on a particular file

// const data = fs.readFileSync("node/file.txt") --> reading buffer data 
// console.log(data);
// const odata= data.toString() --> changing buffer data to string data 
// console.log(odata);

// fs.renameSync("node/file.txt","node/newfile.txt"); --> renaming file to new name 

// fs.writeFileSync("node/file.txt","this is new file");
// fs.unlinkSync("node/newfile.txt"); --> removing newfilw from a folder

// fs.mkdirSync("node2") --> making new folder 
// fs.rmdirSync("node2"); -->: removing the created folder 
