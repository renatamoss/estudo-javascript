let a = 10;
let b = 15;
console.log(a += b);
a = a + b

let c = 10;
let d = 15;
console.log(c -= d);
c = c - d

let e = 10
let f = 15
console.log(e *= f);
e = e * f 

let g = 10
let h = 15
console.log(g /= h); 
g = g / h

// Ternário: uso somente quando tenho dois retornos
let idade = 17;
podeBeber = (idade >= 18) ? 'Pode consumir bebidas.' : 'Não posso consumir bebidas.';
console.log(podeBeber);

// Exercícios de Atribuição

// Some 500 ao valor de dinheiro abaixo,
// atribuindo o novo valor a dinheiro
let dinheiro = 1000;
let dinheiroTotal = 500;
console.log(dinheiroTotal += dinheiro);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
let possuiCarro = true;
let possuiCasa = true;
let darCredito;

darCredito = (possuiCarro && possuiCasa) ?  'Você tem crédito.' : 'Você não tem crédito.';
console.log(darCredito);