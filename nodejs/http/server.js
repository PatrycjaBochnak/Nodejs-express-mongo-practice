const http = require("http");
const port = process.env.PORT || 5500;

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.end(`<h1>Dzień dobry</h1>
//     <script src="./code.js"></script>`);
// }).listen(5500, '127.0.0.1');

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    switch (req.url) {
      case "/":
        res.end("<h1>strona glowna</h1>");
        break;
      case "/users":
        res.end("strona uzytkownikow");
        break;
      case "/api/users":
        res.end("api");
        break;
      default:
        res.end("Strona nie istnieje")
    }
    // if(req.url === "/") {
    //   res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    //   res.end("<h1>Strona główna</h1>")
    // } else if (req.url === "/users") {
    //   res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    //   res.end("<h1>Lista uzytkownikow</h1>")
    // } else {
    //   res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'})
    //   res.end(`<h1>Brak zawartosci</h1>`)
    // }
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
  });
