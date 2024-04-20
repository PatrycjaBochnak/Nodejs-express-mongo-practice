const http = require("http");

const port = process.env.PORT || 5500;

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.end(`<h1>Dzień dobry</h1>
//     <script src="./code.js"></script>`);
// }).listen(5500, '127.0.0.1');

http
  .createServer((req, res) => {
    if(req.url === "/") {
      res.writeHead(200, {'Content-Type' : 'text/html charset=utf-8'})
      res.end("<h1>Strona główna</h1>")
    }
    // res.end(`<h1>${req.url}</h1>`);
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
  });
