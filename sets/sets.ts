
let nameSet = new Set<string>();

nameSet.add('Marcos');
nameSet.add('Lucas');
nameSet.add('Pedro');

nameSet.add('João').add('Ana').add('Luiz');
console.log(nameSet);
console.log('--------------------');

let nameSet2 = new Set<string>(['Teste', 'Teste 2', 'Teste 3']);
console.log(nameSet2);

console.log(nameSet2.has('Teste'));
console.log(nameSet2.has('Teste 4'));
console.log(nameSet.has('Alécio'));
console.log(nameSet.has('Ana'));
console.log(nameSet.delete('Marcos'));
console.log(nameSet.has('Marcos'));

