/*Variáveis*/

var num = 5;
var bool = true;

/*Funções*/

function mult ( num : number) : number {
    return num * 10;
}

function flag ( yes : boolean = false ) : void{

    let str = yes ? "Acesso aceito" : "Acesso negado";
    console.log(str);
}

/* Função anônima */

const pag = function (num: number, num2: number = 5) : void{

    console.log(` Multiplicando : ${num * num2}`);
};

const sum = ( num : number, num2 : number = 5) : void =>{
    console.log(` Somando : ${num + num2}`);
};

/*Chamada das funções*/
flag(bool);
console.log(mult(num));
pag(num);
sum(num);