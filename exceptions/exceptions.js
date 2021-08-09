"use strict";
function WithString(input) {
    if (input === undefined || input === '') {
        throw new StringError(` A string ${input} não é válida`);
    }
    return input;
}
class StringError {
    constructor(message) {
        this.name = 'StringError';
        this.message = message;
        if (typeof console !== undefined) {
            console.log(`Error : ${message} `);
        }
    }
    toString() {
        return `${this.name} || ${this.message}`;
    }
}
try {
    let input = WithString('');
}
catch (error) {
    if (error instanceof StringError) {
        console.log(`ocorreu um erro : ${error}`);
    }
    console.log(`ocorreu um erro geral : ${error}`);
}
//# sourceMappingURL=exceptions.js.map