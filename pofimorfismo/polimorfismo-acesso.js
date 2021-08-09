"use strict";
/* Classes */
class client {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    print() {
        console.log(` ${this.id} || ${this.name}`);
    }
}
class gerent extends client {
    constructor(id, name, isAdmin) {
        super(id, name);
        this.isAdmin = isAdmin;
    }
    print() {
        super.print();
        if (this.isAdmin) {
            return console.log(` ${this.id} || ${this.name} || ${this.isAdmin}`);
        }
        console.log(` ${this.id} || ${this.name}`);
    }
}
let cliente = new client(1, 'Marcos André');
let gerente = new gerent(2, 'Marcos Lima', true);
let people = new gerent(3, 'Lucas', true);
people.print();
//# sourceMappingURL=polimorfismo-acesso.js.map