import urlValidator =  Validation.UrlValidator;
import emailValidator = Validation.EmailValidator;

let url : string = 'https://net.tutsplus.com/about';
let url2 : string = 'https://google.com/some/file!.html';

let email : string= 'john@doe.com';
let email2 : string = 'john@doe.something';

let ip : string = '73.60.124.136';
let ip2 : string = '256.60.124.136';

console.log(`Retorno validador de email : ${new emailValidator().isValid(email)}`);
console.log(`Retorno validador de email : ${new emailValidator().isValid(email2)}`);

console.log(`Retorno validador url: ${new urlValidator().isValid(url)}`);
console.log(`Retorno validador url: ${new urlValidator().isValid(url2)}`);



