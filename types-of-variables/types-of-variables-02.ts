/*Variáveis */

var number : number = 10;
var number2 : number = 9;
var number3 : number = 5;
/*Funções */
function  add( num1: number, num2: number, num3?:number) : void{
     if(num3){
        console.log(` A soma dos valores é: ${num1 + num2 + num3}`);
     }else{
         console.log(` A soma dos valores é: ${num1 + num2}`);
     }
}

function media( num1: number, num2: number, num3:number) : number{
    if(num3){
        return (num1 + num2 + num3)/3;
    }

    return num1 + num2/2;
}

function add2(name : string, values : number[]) : void {
    let i : number = 0;
    let acum : number = 0;
    for(i = 0; i < values.length; i++){
        acum = acum + values[i];
    }
    let media = acum/ values.length;
    console.log(` Nome : ${name} , total acumulado : ${acum}, média: ${media}`);
}
/*Chamadas de funções */

add(number, number2);
add(number, number2, number3);

let grades : number = media( number, number2 , number3);

if(grades >= 7){
    console.log(` Aprovado com média ${grades}`);
}else if (grades < 7 && grades > 3) {
    console.log(`De recuperação com nota ${grades}`);
} else {
    console.log(` Reprovado com média: ${grades}`);   
}

let nam : string = "Marcos André";
let values : Array<number>  = [10, 9, 5];
add2(nam , values);

/*Casting*/
var teste = "Testando casting";
let stringLength : number = (<string> teste).length;
let stringUpperCase : string = (teste as string).toUpperCase();

console.log(`Tamanho da string : ${stringLength}`);
console.log(`String em maiúsculo: ${stringUpperCase}`);