
let key : string = "key1";
let key2 : string = "key2";

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

sessionStorage.setItem(key, 'chave 1');
sessionStorage.setItem(key2, 'chave 2');

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));

for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem( <string> sessionStorage.key(i)));
}

sessionStorage.removeItem(key);
sessionStorage.removeItem(key2);

console.log(sessionStorage.getItem(key));
console.log(sessionStorage.getItem(key2));


/*Por aba e não expira enquanto estiver na aba, limite de 5MB */