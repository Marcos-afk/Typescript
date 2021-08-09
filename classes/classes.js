"use strict";
/*Classes */
class Character {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    PrintOut() {
        console.log(`Nome : ${this.name} || class : ${this.grade}`);
    }
}
class Boss extends Character {
    constructor(name, grade, heal) {
        super(name, grade);
        this.heal = heal;
    }
    PrintOut() {
        super.PrintOut();
        console.log(`HP: ${this.heal}`);
    }
}
/*Chamada*/
let character = new Character('Marcos', 'Mage');
character.PrintOut();
let boss = new Boss('Sherlyous', 'PowerHouse', 1200);
boss.PrintOut();
//# sourceMappingURL=classes.js.map