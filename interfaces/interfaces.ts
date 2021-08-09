/*Interfaces*/

interface Person {
    height : number,
    weight : number
}

interface Trainer extends Person{
        name : string
}

interface Manager extends Trainer {
    salary : number,
    readonly bonus : number
}

/*Funções */
function IMCcalc( person:{height : number, weight: number , name?:string}) : void{
    if(person.name){
        let imc : number = person.weight/(person.height*person.height);
        console.log(`${person.name} seu IMC é ${imc.toFixed(1)}`);
    }else{
        let imc : number = person.weight/(person.height*person.height);
        console.log(`Seu IMC é : ${imc.toFixed(1)}`);
    }
}

function IMCcalcTrainer(person : Trainer) {
    
    let imc : number = person.weight/(person.height*person.height);
    console.log(`${person.name} seu IMC é ${imc.toFixed(1)}`);
   
}

function ManagerCalc(manager : Manager) {
    if(manager.salary > 1500){
        console.log(` ${manager.name} , peso ${manager.weight}, altura ${manager.height} e salário ${manager.salary}`);
    }else{
        let newSalary = manager.salary + (manager.salary * manager.bonus);
        console.log(` ${manager.name} , peso ${manager.weight}, altura ${manager.height} e salário ${newSalary}`);
    }
}

/*Usando interfaces */
let person : Person = {
    height : 1.80,
    weight: 70
}

let trainer : Trainer = {
    name : "Marcos André",
    height: 1.80,
    weight: 70
}

let manager : Manager =  {
    name : "Lucas Ribeiro",
    height : 1.80,
    weight: 70,
    salary: 1200,
    bonus: 0.5
}

let manager2 : Manager = {
    name : "Sherlyson Ribeiro",
    height : 1.80,
    weight: 70,
    salary: 1600,
    bonus: 0.5
}

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