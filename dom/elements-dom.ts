
let doc = <HTMLDivElement>document.getElementById('assunto');
let text = <HTMLInputElement> document.getElementById('texto');

function alerta () : void{
    alert('botão funcionando');
}

function escrever () : void {
    if( doc !== null){
    doc.innerHTML = 'Botão funcionando!';
    }
}

function enviar() : void{
    if(text !== null && doc !== null){
        doc.innerHTML = text.value;
    }
}