"use strict";
const num = [5, 5, 5, 5, -5];
const myReduce = (array) => {
    let element = 0;
    for (const item of array) {
        element += item;
    }
    return element;
};
console.log(myReduce(num));
