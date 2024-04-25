// const fs = require("fs");
// // fs.access('./names.txt', fs.constants.W_OK, (err) => {
// //     console.log(err ? "Plik nie istnieje" : "Plik istnieje")
// // })

// // fs.access('./zablokowany.txt', fs.constants.W_OK, (err) => {
// //         console.log(err ? "Pliku nie mozna zapisywac" : "Plik mozna zapisywac")
// //     })

// try {
//     fs.renameSync("names.txt", "imionaa.txt");
//     console.log("Nazwa pliku została zmieniona");
// } catch (err) {
//     console.error("Błąd podczas zmiany nazwy pliku:", err);
// }

// const path = require('path')

// const pathToFile = path.join(__dirname, 'imionaa.txt');
// console.log(pathToFile)

// const anotherPath = path.join('/users/pl', 'active', 'users/join')
// console.log(anotherPath)

// const parse = path.parse(__filename);
// console.log(parse)

// console.log(path.extname('dsdsds.js'))

const os = require('os');

const uptime = os.uptime();
console.log(uptime)

console.log(os.homedir())