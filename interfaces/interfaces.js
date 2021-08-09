"use strict";
/*Interfaces*/
/*Funções */
function IMCcalc(person) {
    if (person.name) {
        let imc = person.weight / (person.height * person.height);
        console.log(`${person.name} seu IMC é ${imc.toFixed(1)}`);
    }
    else {
        let imc = person.weight / (person.height * person.height);
        console.log(`Seu IMC é : ${imc.toFixed(1)}`);
    }
}
function IMCcalcTrainer(person) {
    let imc = person.weight / (person.height * person.height);
    console.log(`${person.name} seu IMC é ${imc.toFixed(1)}`);
}
function ManagerCalc(manager) {
    if (manager.salary > 1500) {
        console.log(` ${manager.name} , peso ${manager.weight}, altura ${manager.height} e salário ${manager.salary}`);
    }
    else {
        let newSalary = manager.salary + (manager.salary * manager.bonus);
        console.log(` ${manager.name} , peso ${manager.weight}, altura ${manager.height} e salário ${newSalary}`);
    }
}
/*Usando interfaces */
let person = {
    height: 1.80,
    weight: 70
};
let trainer = {
    name: "Marcos André",
    height: 1.80,
    weight: 70
};
let manager = {
    name: "Lucas Ribeiro",
    height: 1.80,
    weight: 70,
    salary: 1200,
    bonus: 0.5
};
let manager2 = {
    name: "Sherlyson Ribeiro",
    height: 1.80,
    weight: 70,
    salary: 1600,
    bonus: 0.5
};
/*Objetos para teste da função */
/*var person = {
        name : 'Marcos André',
        height: 1.80,
        weight : 70
}

var person2 = {
    name: 'Julio Alves',
    height: 1.75,
    weight : 70
}
*/
/*Chamada de funções */
IMCcalc(person);
IMCcalcTrainer(trainer);
ManagerCalc(manager);
ManagerCalc(manager2);
//# sourceMappingURL=interfaces.js.map