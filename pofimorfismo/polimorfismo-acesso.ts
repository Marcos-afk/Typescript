
/* Classes */

class client{
    protected id : number;
    protected name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }

    print() : void{
        console.log(` ${this.id} || ${this.name}`);
    }
}

class gerent extends client{
    protected isAdmin?: boolean;
    constructor(id : number, name: string, isAdmin: boolean){
        super(id, name);
        this.isAdmin = isAdmin;
    }

    print(){
        super.print();
        if(this.isAdmin){
            return  console.log(` ${this.id} || ${this.name} || ${this.isAdmin}`);
        }

        console.log(` ${this.id} || ${this.name}`);
    }
}

let cliente = new client(1 , 'Marcos André');
let gerente = new gerent(2 , 'Marcos Lima', true);

let people : client = new gerent(3 , 'Lucas', true);
people.print();




