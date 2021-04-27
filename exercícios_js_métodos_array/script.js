//Removendo elementos de um Array -métodos:
//pop: remove o último indice
let criancas = ['8', '12', '40'];
let adulto = criancas.pop();
console.log(adulto);
console.log(criancas);

//shift: remove o primeiro indice
let meninas = ['Samuel', 'Renata', 'Sara'];
let menino = meninas.shift();
console.log(meninas)
console.log(menino);

//splice: remove pelo indice + qtde 
let animais = ['passaros', 'insetos', 'peixes'];
let aquaticos = animais.splice(2, 1);
let voadores = animais.splice(0, 2);
console.log(aquaticos);
console.log(voadores);

//Verificando se um elemento existe array 
// métodos includes, indexOF
let paises = ['Brasil', 'Portugal', 'Japão'];
console.log(paises.includes(`Grécia`));

if (paises.includes('Brasil')) {
    console.log(`País válido`);
} else {
    console.log(`Este país não é válido`);
}

console.log(paises.indexOf('Japão'));

if (indexOf = 1) {
    console.log(`Este país é Portugal`)
} else {
    console.log(`Este país não é Portugal.`)
}
