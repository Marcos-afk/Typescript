"use strict";
/*Classe*/
class Filme {
    constructor(name, category, description) {
        this.name = name;
        this.category = category;
        this.description = description;
    }
    print() {
        console.log(` ${this.name} , categoria : ${this.category}, descrição : ${this.description}`);
    }
}
let filme = new Filme('Resident evil', 'Ação/horror', 'Depois de um vírus escapar...');
filme.print();
//# sourceMappingURL=classes-02.js.map