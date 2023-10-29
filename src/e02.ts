const elementos: (string | number)[] = ['Perro', 5, "Gato", 1, 15, 'Leon'];

const myFind = (array:(string | number)[], toFind:string|number): string | number | undefined => {
    let element: string | number |undefined= undefined;
    for (const item of array) {
        if(toFind == item){
            element = item;
            break;
        }
    }
    return element;
}

console.log(elementos.find((i)=>i == 'Perro'));
console.log(myFind(elementos, "Perro"))
console.log(elementos.find((i)=>i == 7));
console.log(myFind(elementos, 7))
console.log(myFind(elementos, 5))
console.log(myFind(elementos, "Lechuza"))
console.log(myFind(elementos, "Leon"))
