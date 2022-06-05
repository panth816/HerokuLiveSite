"use strict";
const http = require('http');
const fs = require('fs');
const mime = require('mime-types');
let lookup = mime.lookup;
const port = 3000;
const server = http.createServer(function (req, res) {
    let path = req.url;
    if (path === "/" || path === "/home") {
        path = "/index.html";
    }
    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(404);
            console.log(`Error: ${err.message}`);
            return res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ERROR - 404</title>
            </head>
            <body>
                <h1>ERROR - 404 - File Not Found!</h1>
            </body>
            </html>
            `);
        }
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.writeHead(200, { 'Content-Type': mime_type });
        console.log(`Full File Name: ${__dirname}${req.url}`);
        return res.end(data);
    });
});
server.listen(port, function () {
    console.log(`Server running at Port: ${port}`);
});
//# sourceMappingURL=server.js.map