const sculptureList = require('./data.js'); // import data.js

const sculptureListLengths = sculptureList.map(sculpture => {
    let lengthObject = {};
    
    for (const key in sculpture) {
        lengthObject[key] = sculpture[key].length;
    }

    return lengthObject;
});

console.log(sculptureListLengths);

// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in element){
//    console.log(`${key}: ${element[key].length}`)
//}
