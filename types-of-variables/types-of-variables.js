"use strict";
/* Variáveis*/
var num = 5;
var bool = false;
var str = "um texto qualquer";
var str2 = 'um texto qualquer 2';
var str3 = `${str} 3`;
console.log(str3);
var array = [1, 2, 3, 4, 5];
var array2 = [5, 6, 7, 8];
var tuple;
tuple = [3, 'Marcos André'];
console.log(tuple[1].toUpperCase());
var Working_Days;
(function (Working_Days) {
    Working_Days[Working_Days["Monday"] = 0] = "Monday";
    Working_Days[Working_Days["Tuesday"] = 1] = "Tuesday";
    Working_Days[Working_Days["Wednesday"] = 2] = "Wednesday";
    Working_Days[Working_Days["Thursday"] = 3] = "Thursday";
    Working_Days[Working_Days["Friday"] = 4] = "Friday";
})(Working_Days || (Working_Days = {}));
;
let day = Working_Days.Monday;
console.log(`Dia: ${day} || próximo dia : ${Working_Days.Tuesday}`);
console.log(`Dia : ${Working_Days[0]} || próximo dia: ${Working_Days[1]}`);
/*Funções*/
function fun(test) {
    if (test) {
        console.log(`Valor num multiplicado por 5: ${num * 5}`);
    }
    else {
        console.log(`valor num multiplicado por 10: ${num * 10}`);
    }
}
function fun2(number) {
    if (number > 5) {
        return 10 - number;
    }
    return 10 + number;
}
function fun3(array) {
    let i = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === 2) {
            return 1;
        }
    }
    return -1;
}
/*Chamada de função*/
fun(bool);
console.log('resultado: ' + fun2(num));
let validity = fun3(array);
if (validity === 1) {
    console.log('valor existe no vetor');
}
else {
    console.log('valor não existe no vetor');
}
//# sourceMappingURL=types-of-variables.js.map