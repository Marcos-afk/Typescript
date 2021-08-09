"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailValidatorExternal_1 = require("./emailValidatorExternal");
const urlValidatorExternal_1 = require("./urlValidatorExternal");
let url = 'https://net.tutsplus.com/about';
let url2 = 'https://google.com/some/file!.html';
let email = 'john@doe.com';
let email2 = 'john@doe.something';
console.log(`Retorno validador de email: ${new emailValidatorExternal_1.EmailValidatorExternal().isValid(email)}`);
console.log(`Retorno validador de email: ${new emailValidatorExternal_1.EmailValidatorExternal().isValid(email2)}`);
console.log(`Retorno validador de email: ${new urlValidatorExternal_1.urlValidatorExternal().isValid(url)}`);
console.log(`Retorno validador de email: ${new urlValidatorExternal_1.urlValidatorExternal().isValid(url2)}`);
//# sourceMappingURL=index.js.map