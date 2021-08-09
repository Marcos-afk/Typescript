
import {EmailValidatorExternal} from './emailValidatorExternal';
import {urlValidatorExternal} from './urlValidatorExternal';


let url : string = 'https://net.tutsplus.com/about';
let url2 : string = 'https://google.com/some/file!.html';

let email : string = 'john@doe.com';
let email2 : string = 'john@doe.something';


console.log(`Retorno validador de email: ${ new EmailValidatorExternal().isValid(email)}`);
console.log(`Retorno validador de email: ${ new EmailValidatorExternal().isValid(email2)}`);

console.log(`Retorno validador de email: ${ new urlValidatorExternal().isValid(url)}`);
console.log(`Retorno validador de email: ${ new urlValidatorExternal().isValid(url2)}`);