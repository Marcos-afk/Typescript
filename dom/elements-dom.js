"use strict";
let doc = document.getElementById('assunto');
let text = document.getElementById('texto');
function alerta() {
    alert('botão funcionando');
}
function escrever() {
    if (doc !== null) {
        doc.innerHTML = 'Botão funcionando!';
    }
}
function enviar() {
    if (text !== null && doc !== null) {
        doc.innerHTML = text.value;
    }
}
//# sourceMappingURL=elements-dom.js.map