
let age = new Map<String, number>();
age.set('Marcos', 20);
age.set('Pedro', 21);
age.set('Ana', 18);

console.log(age);
console.log('---------------------------');
let age2 = new Map<String, number>().set('Marcos', 20).set('Pedro', 21);
console.log(age2);

console.log('---------------------------');

let arrayMap = new Map<number, string>([
    [1 , 'Teste 1'],
    [2 , 'Teste 2'],
    [3 , 'Teste 3']
]);
console.log(arrayMap);

console.log('-----------------------');
for(let key of arrayMap.keys()){
    console.log(key);
}