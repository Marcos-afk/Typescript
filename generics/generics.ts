/*Generics*/

/*Função Normal */
function reversedList<T>(list: Array<T>) : Array<T>{
    let Newlist : T[] = [];
    for (let i = list.length - 1; i >= 0; i--) {
        Newlist.push(list[i]);  
    }
    return Newlist;
}

let numbers = [ 1 , 2 , 3 ,4 , 5 ];
let names = [ "Marcos", "Lucas" , "Ted" , "Barner"];

let reverseNames = reversedList<string>(names);
let reverseNumbers = reversedList<number>(numbers);

console.log(reverseNumbers);
console.log(reverseNames);

/*Arrow Função */

const reversedList2 = <T>(list : Array<T>) : Array<T>=>{
    let newList : T[] = [];
    for( let i = list.length - 1; i >= 0 ; i--){
            newList.push(list[i]);
    }
    return newList;
}

let numbers2 = [ 5 , 4 , 3 , 2 , 1 ];
let names2 = [ "Barner", "Ted" , "Lucas" , "Marcos"];

console.log(reversedList2(numbers2));
console.log(reversedList2(names2));

/*Generics com classe */

class Person3{
    private _name : string;
    private _username: string;

    constructor(name : string, username: string){
        this._name = name;
        this._username = username;
    }

    public getName(){
        console.log(` Nome : ${this._name}`);
    }

    public getUsername(){
        console.log(` Sobrenome: ${this._username}`);
    }

    public setName( value : string) : string{
        return this._name = value;
    }

    public setUsername( value: string) : string {
        return this._username = value;
    }
}

interface repository <T, Id >{
    
    findById(id : Id) : T;
    save(entity : T) : T;

}

class Person3repository implements repository<Person3, number>{
    
    findById(id: number): Person3 {
        console.log(` Código do Id: ${id}`);
        return new Person3 ("Lucas", "Melo");
    }
   
    save(entity: Person3): Person3 {
        return new Person3 ("Júlio" , "Almeida");
    }

}

let personRepository = new Person3repository();
console.log(personRepository.findById(3));
console.log(personRepository.save( new Person3("Maike", "Andersen")));



