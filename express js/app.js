const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

// app.all('/', (req) => {
//     // const { name, surname } = req.query;
//     // console.log('Hello' + name  + ' ' + surname);
//     console.log(req.get('Referer'))
// }) 

app.get('/article/:id/:title', (req) => {
    console.log(req.params)
});
