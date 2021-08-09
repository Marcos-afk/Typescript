"use strict";
let promise = new Promise((resolve, reject) => {
    let isOpen = true;
    if (isOpen) {
        return resolve("Opened");
    }
    reject('Not opened');
});
promise.then((response) => {
    console.log('Valor do response : ' + response);
}).catch((error) => { console.log('Ocorreu um erro : ' + error); });
const openFile = () => {
    return new Promise((resolve, reject) => {
        let isOpen = true;
        if (isOpen) {
            return resolve("Opened");
        }
        reject('Not opened');
    });
};
const readFile = () => {
    return new Promise((resolve, reject) => {
        let isOpen = true;
        if (isOpen) {
            return resolve("Read");
        }
        reject('Not read');
    });
};
const deleteFile = () => {
    return new Promise((resolve, reject) => {
        let isOpen = true;
        if (isOpen) {
            return resolve("Delete");
        }
        reject('Not delete');
    });
};
openFile().then(() => {
    readFile().then(() => {
        deleteFile().then(() => {
            console.log('Arquivo deletado!');
        }).catch((error) => { console.log('Ocorreu um erro: ' + error); });
    }).catch((error) => { console.log('Ocorreu um erro : ' + error); });
}).catch((error) => {
    console.log('Ocorreu um erro : ' + error);
});
//# sourceMappingURL=promises.js.map