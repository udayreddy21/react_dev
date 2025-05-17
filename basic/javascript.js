const http = require('http');
const path = require('path');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Hello World");
        res.end();
    }
    else if(req.url === '/path'){
        res.write("Hello World");
        res.end(`file path is ${path.join(__dirname, 'script.js')}`);   
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
})

//in js we need to harcode all the paths and it will be hard to maintain and complex
// routing will be difficult as more and more paths are added

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});