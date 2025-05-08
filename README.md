# js-object-manipulation

# Overview
This shows JavaScript object manipulation

    const sculptureList = require('./data.js');

    const sculptureListLengths = sculptureList.map(sculpture => {
        let lengthObject = {};
    
        for (const key in sculpture) {
            lengthObject[key] = sculpture[key].length;
        }

        return lengthObject;
    });

    console.log(sculptureListLengths);

# Solution

name: 17
artist: 16
description: 188
url: 32
alt: 91
