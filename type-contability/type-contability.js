"use strict";
class anotherExample01 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class anotherExample02 {
    constructor(num) {
        this.num = num;
    }
}
/*Funciona*/
let exVar01;
exVar01 = new anotherExample01("Marcos", 20);
/*Não funciona */
//exVar01 = new anotherExample02(5);
let exVar02 = { name: 'Pedro', age: 20 };
exVar01 = exVar02;
/* Funções */
function functionExample01(ex) {
    console.log(ex);
}
let x1 = (a) => {
    return a;
};
let x2 = (n, s) => {
    if (s) {
        console.log(s);
    }
    return n;
};
x1 = x2;
/* Chamada */
functionExample01(exVar02);
functionExample01(exVar01);
console.log(x1(5));
console.log(x2(5, "olá mundo!"));
//# sourceMappingURL=type-contability.js.map