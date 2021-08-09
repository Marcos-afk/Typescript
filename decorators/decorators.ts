
@Wrestler
class Superstars{
    name : string;
    classification: string;

    constructor( name : string, classification: string){
        this.name = name;
        this.classification = classification;
    }
} 

function Wrestler(target : any) : void {
    Object.defineProperty(target.prototype, "Wrestler" , {value : () => 'WWE Universe'});
}

let superstars = new Superstars('John Cena' , "ShowMan");
console.log(superstars);
//console.log(superstars.Wrestler());

