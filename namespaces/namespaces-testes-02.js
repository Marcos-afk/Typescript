"use strict";
var urlValidator = Validation.UrlValidator;
var emailValidator = Validation.EmailValidator;
let url = 'https://net.tutsplus.com/about';
let url2 = 'https://google.com/some/file!.html';
let email = 'john@doe.com';
let email2 = 'john@doe.something';
let ip = '73.60.124.136';
let ip2 = '256.60.124.136';
console.log(`Retorno validador de email : ${new emailValidator().isValid(email)}`);
console.log(`Retorno validador de email : ${new emailValidator().isValid(email2)}`);
console.log(`Retorno validador url: ${new urlValidator().isValid(url)}`);
console.log(`Retorno validador url: ${new urlValidator().isValid(url2)}`);
//# sourceMappingURL=namespaces-testes-02.js.map