"use strict";
/*Variáveis*/
var num = 5;
var bool = true;
/*Funções*/
function mult(num) {
    return num * 10;
}
function flag(yes = false) {
    let str = yes ? "Acesso aceito" : "Acesso negado";
    console.log(str);
}
/* Função anônima */
const pag = function (num, num2 = 5) {
    console.log(` Multiplicando : ${num * num2}`);
};
const sum = (num, num2 = 5) => {
    console.log(` Somando : ${num + num2}`);
};
/*Chamada das funções*/
flag(bool);
console.log(mult(num));
pag(num);
sum(num);
//# sourceMappingURL=functions.js.map