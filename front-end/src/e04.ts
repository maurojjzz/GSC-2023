const num:number[] = [5,5,5,5,-5]

const myReduce= (array:number[]): number  => {
    let element: number = 0;
    for (const item of array) {
        element += item;
    }
    return element;
}


console.log(myReduce(num))