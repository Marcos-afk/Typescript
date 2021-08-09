
/* Variáveis*/
var num  : number = 5; 
var bool : boolean = false;
var str  : string = "um texto qualquer";
var str2 : string  = 'um texto qualquer 2';
var str3 : string = `${str} 3`;
console.log(str3);

var array : number[] = [1, 2, 3, 4, 5];
var array2 : Array<number> = [5 , 6 , 7, 8];

var tuple : [number, string];
tuple = [3, 'Marcos André'];
console.log(tuple[1].toUpperCase());


enum Working_Days { Monday, Tuesday, Wednesday, Thursday, Friday};
let day : Working_Days = Working_Days.Monday;

console.log(`Dia: ${day} || próximo dia : ${Working_Days.Tuesday}`);
console.log(`Dia : ${Working_Days[0]} || próximo dia: ${Working_Days[1]}`);

/*Funções*/ 
function fun( test: boolean): void{
    if(test){
        console.log(`Valor num multiplicado por 5: ${num*5}`);
    }else{
        console.log(`valor num multiplicado por 10: ${num*10}`);
    }
} 

function fun2( number: number) : number{
    if(number > 5){
        return 10 - number;
    }
    return 10 + number;
}

function fun3( array : number[]): number{
    let i : number = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] === 2){
            return 1;
        }
    }
    return -1;
}

/*Chamada de função*/ 
fun(bool);

console.log('resultado: ' + fun2(num));


let validity : number = fun3(array);
if(validity === 1){
    console.log('valor existe no vetor');
}else{
    console.log('valor não existe no vetor');
}