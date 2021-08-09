"use strict";
let x = ['Marcos', 'André', 'Lucas', 'Pedro', 'Harry'];
for (let i = 0; i < x.length; i++) {
    console.log(` Posição ${i + 1}º : ${x[i]}`);
}
x.forEach(element => {
    console.log(`Nome ${element}`);
});
let obj = { value: 'valor 1', value2: 'valor 2' };
for (let prop in obj) {
    console.log(` Props : ${prop}`);
}
//# sourceMappingURL=for-loops.js.map