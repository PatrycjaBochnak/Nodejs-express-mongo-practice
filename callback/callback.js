// const add = (x, y) => x + y;
// const division = (num1, num2) => num1 / num2;

// const math = (a, b, callback) => {
//   console.log(callback(a, b));
// };

// math(5, 4, add)
// math(4, 2, division)

// setTimeout(() => console.log('Co tam') ,2000);

const fs = require('fs')

fs.readFile('./text.txt', 'utf-8', (err, file) => console.log(file));
console.log('Bedzie pierwsze wyswietlone')