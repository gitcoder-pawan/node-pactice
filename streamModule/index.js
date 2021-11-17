const http= require('http');
const fs= require('fs');
const server= http.createServer();

server.on('request', (req, res)=>{
        // const data= fs.readFile('text.txt',"utf-8",(err, data)=>{
    //     if(err){
    //         console.log(err)
    //         res.end('file not found')
    //     }
    //     res.end(data);
    // })

    // 2nd way --> streaming way( in this way whatever the data is loaded it will show on the screen , it will not wait for the whole to load.)
    // const rstream= fs.createReadStream('text.txt');

    // //using we can write data on the web page 
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // })

    // //using this we we terminate the page loading. If we do not put this method then page will continue to load 
    // rstream.on('end',()=>{
    //     res.end()
    // })

    // // using this we can catch the error. If the file doest not exist then can end the response by providing some message on the screen like file does not exist.
    // rstream.on('error',(err)=>{
    //     console.log(err)
    //     res.end('file not found ')
    // })
    
    const rstream= fs.createReadStream("text.txt");
    rstream.pipe(res);


});

server.listen(8100,"127.0.0.1");