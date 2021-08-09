"use strict";
/* Funções */
function action(callback) {
    callback('Marcos André');
}
function callbackTest(name) {
    console.log(` Nome inserido : ${name}`);
}
function calculator(num, num2, callback) {
    return callback(num, num2);
}
function soma(num, num2) {
    return num + num2;
}
function subtrair(num, num2) {
    return num - num2;
}
function multiplicar(num, num2) {
    return num * num2;
}
function dividir(num, num2) {
    return num - num2;
}
/* Chamadas */
action(callbackTest);
console.log(` Resultado : ${calculator(5, 4, soma)}`);
console.log(` Resultado : ${calculator(5, 4, subtrair)}`);
console.log(` Resultado : ${calculator(5, 4, multiplicar)}`);
console.log(` Resultado : ${calculator(4, 2, dividir)}`);
//# sourceMappingURL=callback.js.map