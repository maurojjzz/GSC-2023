"use strict";
const nro = [1, 2, 3, 4];
const nombres = ['Maria', 'Juan', 'Pablo', 'Damian'];
const myMap = (array, func) => {
    const newArray = [];
    for (const item of array) {
        newArray.push(func(item));
    }
    return newArray;
};
console.log(myMap(nro, nro => nro * 2));
console.log(myMap(nombres, nom => 'Hola ' + nom));
