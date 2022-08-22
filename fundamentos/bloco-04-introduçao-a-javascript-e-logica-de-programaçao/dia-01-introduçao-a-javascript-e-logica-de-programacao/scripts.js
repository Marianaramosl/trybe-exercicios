// Questao 1:
const a = 10;
const b = 5;
const c = 20;

console.log("adição: " + (a+b));
console.log("subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

// Questao 2
if(a>b){
    console.log("a: " + a);
}
else{
    console.log("b: " + b);
}

// Questao 3
if(a>b && a>c){
    console.log("a: " + a);
}
else if(b>a && b>c){
    console.log("b: " + b);
}
else {
    console.log("c: " + c);
}

// Questao 4

if (a>0){
    console.log("positive");
}
else if (a<0){
    console.log("negative");
}
else{
    console.log("zero");
}

// Questao 5

let d = 90;
let e = 40;
let f = 50;

if ( (d+e+f) === 180){
    console.log(true);
}
else if ((d+e+f)!= 180 && (d+e+f)>0){
    console.log(false);
}
else{
    console.log("erro");
}

// Questao 6


// Questao 7

// const nota = 0;

// if (nota >= 90 && 0<nota<100){
//     console.log("A");
// }
// else if (nota>=80 && 0<nota<100){
//     console.log("B");
// }
// else if (nota>=70 && 0<nota<100){
//     console.log("C");
// }
// else if (nota>=60 && 0<nota<100){
//     console.log("D");
// }
// else if (nota>=50 && 0<nota<100){
//     console.log("E");
// }
// else if (nota<50 && 0<nota<100){
//     console.log("F");
// }
// else {
//     console.log("erro")
// }

// 


// Questao 8

const g = 8;
const h = 4;
const i = 2;

if (g%2===0 || h%2===0 || i%2===0){
    console.log(true);
}
else{
    console.log(false);
}

// Questao 9

if (g%2!=0 || h%2!=0 || i%2!=0){
    console.log(true);
} else{
    console.log(false);
}
