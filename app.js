var http = require("http");
const port = process.env.PORT || 3001;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Matthew!"); //Changed to Matthew to test if it would change in render
  })
  .listen(port);