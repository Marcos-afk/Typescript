"use strict";
/*Generics*/
/*Função Normal */
function reversedList(list) {
    let Newlist = [];
    for (let i = list.length - 1; i >= 0; i--) {
        Newlist.push(list[i]);
    }
    return Newlist;
}
let numbers = [1, 2, 3, 4, 5];
let names = ["Marcos", "Lucas", "Ted", "Barner"];
let reverseNames = reversedList(names);
let reverseNumbers = reversedList(numbers);
console.log(reverseNumbers);
console.log(reverseNames);
/*Arrow Função */
const reversedList2 = (list) => {
    let newList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newList.push(list[i]);
    }
    return newList;
};
let numbers2 = [5, 4, 3, 2, 1];
let names2 = ["Barner", "Ted", "Lucas", "Marcos"];
console.log(reversedList2(numbers2));
console.log(reversedList2(names2));
/*Generics com classe */
class Person3 {
    constructor(name, username) {
        this._name = name;
        this._username = username;
    }
    getName() {
        console.log(` Nome : ${this._name}`);
    }
    getUsername() {
        console.log(` Sobrenome: ${this._username}`);
    }
    setName(value) {
        return this._name = value;
    }
    setUsername(value) {
        return this._username = value;
    }
}
class Person3repository {
    findById(id) {
        console.log(` Código do Id: ${id}`);
        return new Person3("Lucas", "Melo");
    }
    save(entity) {
        return new Person3("Júlio", "Almeida");
    }
}
let personRepository = new Person3repository();
console.log(personRepository.findById(3));
console.log(personRepository.save(new Person3("Maike", "Andersen")));
//# sourceMappingURL=generics.js.map