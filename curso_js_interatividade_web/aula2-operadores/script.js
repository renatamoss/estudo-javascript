//Operadores Aritméticos

let suaIdade = 23
const pi = 3.14;
let exp = 2e10;
console.log(suaIdade, pi, exp);

let soma = 100 + 80;
let subtracao = 100 - 80;
let multiplicacao = 100 * 2;
let dividao = 100 / 2;
let expoente = 2 ** 4;
let modulo = 14 % 5;
console.log(expoente);

// soma = '100' + 50 //na soma é concatenação
// subtracao = '100' - 50 //na subtração (ou outra op diferente de +) o js transforma uma string em número
// multiplicacao = 'Comprou 200' * 2 //Se tiver carácter não transforma, retorna NaN (not a number)

let exemploNumero = 50;
let exemploUnidade = 'kg';
let exemploPeso = exemploNumero + exemploUnidade;
let pesoPorDois = exemploPeso / 2;
console.log(pesoPorDois); //retorna NaN pois tem uma string(kg)

let primeiroResultado = 20 + 5 * 2; // respeita a ordem dos fatores
let segundoResultado = (20 + 5) * 2; 
let terceiroResultado = 20 / 2 * 5; 
let quartoResultado = 10 + 10 * 2 + 20 / 2;
console.log(quartoResultado)

// Operadores Aritméticos Unários

let valorUnario = 5;
console.log(valorUnario++); // 5 pós-incremento // imprimi o primeiro o valor 5, e depois incrementa +1(não imprimi)
console.log(++valorUnario); // 7 pré-incremento // +1 (linha anterior) + 1 + valor 5 
console.log(valorUnario--); // 7 pós-decremento // imprimi primeiro o valor (linha anterior) 7 depois decrementa -1(não imprimi)
console.log(valorUnario); // 6 // trás da linha anterior -1 e valor (linha anterior) 7 

//Estudar
let valorUnario2 = 10;
console.log(++valorUnario2); //11
console.log(valorUnario2--); //11
console.log(valorUnario2++); //10
console.log(--valorUnario2); //10

var outraIdade = '23'
console.log(outraIdade + 5) // retorna 235, pois '23' é string + número 5
console.log(+outraIdade + 5) // retorna 28, pois o carácter + na frente da variável transforma a string em número 23 + 5

// Operadores Boollean

let recebeBoolean = true;
console.log(recebeBoolean); // retorna true
console.log(!recebeBoolean); // retorna false
console.log(!!recebeBoolean); // retorna true

// Operadores de Comparação

let comparacao1 = 10 > 5 // true
console.log(comparacao1);

let comparacao2 = 5 > 10 // false
console.log(comparacao2);

10 == '10' //true - só compara valor
10 === '10' // false - compara tipo + valor
10 != 15 // true - 10 tem valor diferente de 15
10 != '10' // false - pois 10 tem o mesmo valor que '10'
10 !== '10' // true - tipo e valor são diferentes

// operador && os dois tem que ser verdadeiro para retornar verdadeiro
// true && true // true 
// true && false // false - se tem um falso tudo falso - FALSO sempre prevalece
// 'Gato' && 'Cão' // retorna Cão, pois sempre retorna o último
// 'Gato' && false // retorna false
// (5 - 5) && ( 5 + 5 ) // retorna 0, pois o falso prevalece, 0 é falso
// (5 * 5) && (5 + 5) // retorna 10, pois sempre retorna o último
// se todos forem verdadeiros sempre retorna o último
// se tem 1 falso sempre retorna o falso
// 0 é falso e 1 é verdadeiro

// operador Ou retorna verdadeiro se um for verdadeiro
// true || true // retorna true 
// true || false // retonrna true
// false || false // retorna false


// Excercícios de Operadores

// Qual o resultado da seguinte expressão?
var total = 150 + (5 * 2 / 2) + 20;
console.log(total); // TOTAL 175

// Crie duas expressões que retornem NaN
let balas = 100;
let unidades = ' unidades ';
let compra = 'Quero comprar ' + balas + unidades * 10; //retorna NaN, porque unidades é string
console.log(compra);

// Incremente o número 10 e retorne o seu valor incrementado
let valor = 10;
++valor
console.log(valor);

// Como dividir o peso pela altura?
let pesoTotal = '60.0'; //transformar string em número: +pesoTotal
let altura = 1.50;
var unidade = 'kg';
console.log(+pesoTotal / altura + unidade);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Eduardo';
console.log(!!nome); //retorna true

var idade = 32;
console.log(!!idade); //retorna true

var possuiDoutorado = false;
console.log(!possuiDoutorado); //retorna true

var emprego;
console.log(!!emprego); //retorna false

var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta); //retorna false, porque 0 é false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207e6; //e inclui seis zeros
var china = 1340e6;
console.log(brasil , china);

let habitantes = brasil < china;
console.log(habitantes); // retonra true

let habitantesBrasil = 207 == 'habitantes';//false - só compara valor
console.log(habitantesBrasil);

let habitantesChina = 1340 === '1340'; // false - compara tipo + valor
console.log(habitantesChina);

let habitantesBrasilChina = 207 != 1340;
console.log(habitantesBrasilChina); // true são diferentes

let habitantesChinaBrasil = 1340 === 207;
console.log(habitantesChinaBrasil); // false valores diferentes mesmo sendo tipos iguais



















