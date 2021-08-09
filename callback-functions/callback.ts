/* Funções */
function action (callback : (name : string) => void) : void{
  callback('Marcos André');

}

function callbackTest(name: string) : void {
    console.log(` Nome inserido : ${name}`);
}

function calculator( num : number, num2 : number , callback : (num : number , num2 : number) => number) : number{
   return callback(num , num2);
}

function soma(num:number, num2 : number) : number{
    return num + num2;  
}

function subtrair(num:number, num2 : number) : number{
    return num - num2; 
}

function multiplicar(num:number, num2 : number): number {
    return num * num2;
}

function dividir(num:number, num2 : number) : number {
    return num - num2; 
}

/* Chamadas */
action(callbackTest);
console.log(` Resultado : ${calculator(5, 4, soma)}`);
console.log(` Resultado : ${calculator(5, 4, subtrair)}`);
console.log(` Resultado : ${calculator(5, 4, multiplicar)}`);
console.log(` Resultado : ${calculator(4, 2 , dividir)}`);