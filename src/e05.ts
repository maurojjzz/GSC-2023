const cero = (func?: (n: number) => number): number => func? func(0) : 0;
const uno = (func?: (n: number) => number): number => func? func(1) : 1;
const dos = (func?: (n: number) => number): number => func? func(2) : 2;
const tres = (func?: (n: number) => number): number => func? func(3) : 3;
const cuatro = (func?: (n: number) => number): number => func? func(4) : 4;
const cinco = (func?: (n: number) => number): number => func? func(5) : 5;
const seis = (func?: (n: number) => number): number => func? func(6) : 6;
const siete = (func?: (n: number) => number): number => func? func(7) : 7;
const ocho = (func?: (n: number) => number): number => func? func(8) : 8;
const nueve = (func?: (n: number) => number): number => func? func(9) : 9;




const plus = (num1:number) => (num2:number) => num1 + num2;
const minus = (num1:number) => (num2:number) => num2 - num1;
const times = (num1:number) => (num2:number) => num2 * num1;
const dividedBy = (num1:number) => (num2:number) => num2 / num1;


console.log(siete(times(cinco())))
console.log(cuatro(plus(nueve())))
console.log(ocho(minus(tres())))
console.log(seis(dividedBy(dos())))


