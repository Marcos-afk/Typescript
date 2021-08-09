"use strict";
/*Variáveis */
var number = 10;
var number2 = 9;
var number3 = 5;
/*Funções */
function add(num1, num2, num3) {
    if (num3) {
        console.log(` A soma dos valores é: ${num1 + num2 + num3}`);
    }
    else {
        console.log(` A soma dos valores é: ${num1 + num2}`);
    }
}
function media(num1, num2, num3) {
    if (num3) {
        return (num1 + num2 + num3) / 3;
    }
    return num1 + num2 / 2;
}
function add2(name, values) {
    let i = 0;
    let acum = 0;
    for (i = 0; i < values.length; i++) {
        acum = acum + values[i];
    }
    let media = acum / values.length;
    console.log(` Nome : ${name} , total acumulado : ${acum}, média: ${media}`);
}
/*Chamadas de funções */
add(number, number2);
add(number, number2, number3);
let grades = media(number, number2, number3);
if (grades >= 7) {
    console.log(` Aprovado com média ${grades}`);
}
else if (grades < 7 && grades > 3) {
    console.log(`De recuperação com nota ${grades}`);
}
else {
    console.log(` Reprovado com média: ${grades}`);
}
let nam = "Marcos André";
let values = [10, 9, 5];
add2(nam, values);
/*Casting*/
var teste = "Testando casting";
let stringLength = teste.length;
let stringUpperCase = teste.toUpperCase();
console.log(`Tamanho da string : ${stringLength}`);
console.log(`String em maiúsculo: ${stringUpperCase}`);
//# sourceMappingURL=types-of-variables-02.js.map