const http = require('http'); //CommonJS Module Pattern (CJS)
const fs = require('fs');

const port = 3000;

const server= http.createServer(function(req, res)  //server = new server
{
    console.log(__dirname);

    //fs.readFile(__dirname + req.url)
});

server.listen(port, function()  //server.addEventListener("req",)
{
    console.log(`Server running at Port: ${port}`);
});