const numeros: number[] = [7, 15, 6, 8, 9, 150]

const myFilter = (array: any[], func: (e: any) => any): any[] => {
    const newArray: any[] = [];
    for (const item of array) {
        if(func(item)){
            newArray.push(item);
        }
    }
    return newArray;
}


console.log(myFilter(numeros, (nro) => nro > 10))
console.log(myFilter(numeros, (nro) => nro < 10))
console.log(myFilter(numeros, (nro) => nro != 150))
console.log(myFilter(numeros, (nro) => nro == 150))