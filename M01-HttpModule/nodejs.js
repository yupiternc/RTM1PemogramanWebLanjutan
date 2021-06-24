const http = require("http");

http
    .createServer(function(req, res) {
        res.write("Modul HTTP Mobile and Web");

        res.end();
    })
    .listen(3400);