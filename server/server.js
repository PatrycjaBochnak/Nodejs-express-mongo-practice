const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World!</h1>");
});

server.listen(3002, "127.0.0.1", () => console.log("Serwer nasłuchuje na 3002"));
