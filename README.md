# js-object-manipulation
const sculptureList = require('./data.js'); // import data.js

const sculptureListLengths = sculptureList.map(sculpture => {
    let lengthObject = {};
    
    for (const key in sculpture) {
        lengthObject[key] = sculpture[key].length;
    }

    return lengthObject;
});

console.log(sculptureListLengths);
