const nro: number[] = [1,2,3,4];
const nombres: string[] = ['Maria', 'Juan', 'Pablo', 'Damian'];


const myMap = (array:any[], func: (e:any) => any):any[] =>{
    const newArray: any[] = [];
    for(const item of array){
        newArray.push(func(item));
    }
    return newArray;
}

console.log(myMap(nro, nro => nro*2 ));
console.log(myMap(nombres, nom => 'Hola ' + nom ));
