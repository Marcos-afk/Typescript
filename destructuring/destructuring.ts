let destructuring = {
    name : 'Marcos', 
    lastName : 'André'
}

let {
    name: name1,
    lastName: lastName1 
} = destructuring;

console.log(` Nome: ${name1} || Último nome : ${lastName1}`);


class numb {
    public name : string;
    constructor( name : string){
        this.name = name;
    }
}

function list ({name} : numb) : void{
    console.log(name);
}


let array_names : string[] = ['Pedrinho', 'Juquinha'];
let [a , b] = array_names;
console.log(` 1º ${a} , 2º ${b}`);

list( new numb('Um'));
list( new numb('Dois'));