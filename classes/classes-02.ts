
/*Classe*/

class Filme{
        name : string;
        category: string;
        description: string;

        constructor( name : string, category : string, description: string){
                this.name = name;
                this.category = category;
                this.description = description;
        }

        print() : void{
            console.log(` ${this.name} , categoria : ${this.category}, descrição : ${this.description}`);
        }
}

let filme = new Filme('Resident evil' , 'Ação/horror' , 'Depois de um vírus escapar...');
filme.print();