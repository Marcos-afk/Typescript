"use strict";
let destructuring = {
    name: 'Marcos',
    lastName: 'André'
};
let { name: name1, lastName: lastName1 } = destructuring;
console.log(` Nome: ${name1} || Último nome : ${lastName1}`);
class numb {
    constructor(name) {
        this.name = name;
    }
}
function list({ name }) {
    console.log(name);
}
let array_names = ['Pedrinho', 'Juquinha'];
let [a, b] = array_names;
console.log(` 1º ${a} , 2º ${b}`);
list(new numb('Um'));
list(new numb('Dois'));
//# sourceMappingURL=destructuring.js.map