//String
let nome = 'Renata';

//Number
let cadastroIdade = 23;
console.log(typeof cadastroIdade);

//Boolean
let possuiFaculdade = true;
let possuiDoutorado = false;

//Array -> é um objeto
let comidaFavorita = ['Churrasco', 'Lasanha', 'Sorvete', 'Queijo'];
console.log(comidaFavorita);
console.log(comidaFavorita.pop()); //exclui o último item

//Underfined
let endereco;

//Null
let comida = null;

//Symboll
let simbolo = Symbol();

//Diversas formas de escrever uma String
let texto = 'super';

console.log(`Meu nome é ${nome} e minha comida favorita é ${comidaFavorita[0]}`);
console.log('Meu nome é ' + nome + ' e minha idade é ' + cadastroIdade + '.');
console.log(`Meu nome é ${nome} e minha idade é ${cadastroIdade}.`);

console.log(`Javascript é "super" fácil.`); //DESAFIO -> escrever de outras formas
console.log("Javascript é \"super\" fácil.");//escapar as aspas dentro da string, com dois escapes
console.log("Javascript é 'super' fácil.");
console.log("Javascript é "  + texto + "fácil");
console.log(`Javascript é ${texto} fácil.`); //comum no code review - revisão de código por uma segunda pessoa

// Exercícios tipos de dados

// Declare uma variável contendo uma string
let pais = 'Brasil';
console.log(pais);

// Declare uma variável contendo um número dentro de uma string
let distancia = '100000';
let unidadeMedida = 'quilômetros';
let continente = 'América do Sul';
let distanciaTotal = distancia + ' ' + unidadeMedida;
console.log("Vou viajar " + distanciaTotal + " pelo(a) " + continente);

// Declare uma variável com a sua idade
let suaIdade = 35;
console.log('Eu tenho ' + suaIdade + ' anos.');

// Declare duas variáveis, uma com seu nome // e outra com seu sobrenome e some as mesmas
const nomeCadastro = 'Pedro';
const sobrenome = 'Bandeira';
const nomeCompleto = nomeCadastro + ' ' + sobrenome;
console.log('Meu nome é ' + nomeCompleto + '.');

// Coloque a seguinte frase em uma variável: It's time// Verifique o tipo da variável que contém o seu nome
var time = "It's time"; // ou 'It´s time´
console.log(typeof time); // retornou string

// Crie uma array com os anos que o Brasil ganhou a copa// 1959, 1962, 1970, 1994, 2002
let copaBrasil = [1959, 1962, 1970, 1994, 2002]; //número não precisa de aspas
console.log([copaBrasil]);