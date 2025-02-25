# js-object-manipulation
const sculptureListLengths = {}; 

sculptureList.forEach((sculpture, index) => { 
    sculptureListLengths[index] = {}; 
    Object.keys(sculpture).forEach(key => {
        sculptureListLengths[index][key] = String(sculpture[key]).length; 
    });
});

console.log(sculptureListLengths); 
