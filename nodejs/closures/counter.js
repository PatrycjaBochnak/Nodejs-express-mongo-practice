let counter = 0;

module.exports.add = number => { 
    counter += number
    console.log(counter);
}

// module.exports = () => console.log(++counter)