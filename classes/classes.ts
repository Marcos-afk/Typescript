
/*Classes */
class Character {
    name : string; 
    grade : string;
 
    constructor( name : string,  grade : string){
        this.name = name;
        this.grade = grade;
    }


    PrintOut() : void {
        console.log(`Nome : ${this.name} || class : ${this.grade}`);
    }
}

class Boss extends Character{
        heal : number;
        constructor( name : string, grade: string, heal : number){
            super(name, grade);
            this.heal = heal;
        }
        PrintOut(){
            super.PrintOut();
            console.log(`HP: ${this.heal}`);
        }
}

/*Chamada*/

let character = new Character('Marcos', 'Mage');
character.PrintOut();

let boss = new Boss('Sherlyous', 'PowerHouse' , 1200);
boss.PrintOut();
