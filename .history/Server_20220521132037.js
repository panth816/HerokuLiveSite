// require built-in modules
const http = require('http'); // CommonJS Module pattern (CJS)
const fs = require('fs'); 

const port = 3000;
//When we create a server instance, it is IMMUTABLE(it cannot be changed until the server is restarted)
const server = http.createServer(function(req, res)   
{
   fs.readFile(__dirname + req.url, function(err, data)
   {
        if(err)
        {
            res.writeHead(404); // status - file not found
            console.log(`ERROR: ${err.message}`);// output to the dev console
            return res.end(err.message); // output the error message to the page
        }
            //no error
            res.writeHead(200); // status - all ok
            console.log(`DATA: ${data}`);
            return res.end(data);//output the file that was read to the page
           
        
       
   });
});

server.listen(port, function() 
{
    console.log(`Server running at Port: ${port}`);
});
