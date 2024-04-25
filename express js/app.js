const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// app.all('/', (req) => {
//     // const { name, surname } = req.query;
//     // console.log('Hello' + name  + ' ' + surname);
//     console.log(req.get('Referer'))
// })

// app.get('/article/:id/:title', (req) => {
//     console.log(req.params)
// });

app.use(express.json());
app.use(cookieParser());

// app.post('/hello', (req, res) => {
//     const {name, surname} = req.body;
//     res.send('Witaj' + " " + name + " " + surname)
// })

app.use(express.static(path.join(__dirname, "static")));
