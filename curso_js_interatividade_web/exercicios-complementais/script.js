// Variáveis

// Declare 5 variáveis com valores diferentes e concatene os valores no console; 
let país = 'Portugal';
let ano = 2022;
let cidade = 'Lisboa';
let comida = 'Rabanada';
let bebida = 'vinho';
console.log(`Vou viajar para ${país} em ${ano}; Vou comer ${comida} e beber ${bebida}.`);

// Crie uma variável e não atribua valor; 
let sonho;
console.log(sonho);

// Crie uma variável e coloque um valor que seja do tipo array; 
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Japonês'];
console.log(idiomas);


// Tipos de dados

// Declare duas variáveis que recebem strings e exiba no console; 
let estrela = 'Sol';
let satelite = "Lua";
console.log(`De dia tem ${estrela} e de noite tem ${satelite};`);

// Declare uma variável com sua altura; 
let alturaRe = 1.70;
let unidade = 'metro';
console.log(`${alturaRe} ${unidade}`);

// Faça a verificação do tipo de variável que contém a sua altura; 
console.log(typeof alturaRe);

// Crie um array que possua três generos musicais; 
let estiloMusical = ['Rock', 'Clássica', 'Eletrônica'];
console.log(estiloMusical[1]);

// Declare uma variável que receba true; 
const sucesso = true;

// Declare uma variável que receba false; 
let desistir = false;

// Crie uma variável que ao chama-la no console retornará undefined; 
let limite;
console.log(limite);


// Repetição

// Crie um loop que imprima os números primos até 50; 
// primo são divisíveis por 1 e por ele mesmo

function Primo(numero) {
    if (numero < 2)
        return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false;
    } return true;
}

for (let i = 0; i < 50; i++) {
    if (Primo(i))
        console.log(i);
}

//outra forma de fazer este exercício:

const primo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
}

for (let i = 0; i < 50; i++) {
    if (primo(i))
        console.log(i);
}

// Crie um array que contenha os países que fazem fronteira com o Brasil; 
let paises = ['Argentina', 'Bolívia', 'Colômbia', 'Guiana', 'Guiana Francesa', 'Paraguai', 'Peru', 'Suriname', 'Uruguai', 'Venezuela'];
console.log(paises);

// Interaja com o array acima utilizando um loop para  mostrar no console a seguinte mensagem: //`${pais} faz fronteira com o Brasil` 
for (let i = 0; i < paises.length; i++) {
    console.log(`${paises[i]} faz fronteira com o Brasil.`)
}


// Condicionais

// Escreva um algoritmo que irá receber dois valores: idade e nome;  
// Ele deve ser capaz de verificar se a pessoa possui maioridade; 
// Se possuir, exibir no console um cumprimento com o nome e dizendo que é permitida a entrada; 
// Se não possuir a maioridade, exibir no console um cumprimento com o nome e dizendo que não é permitida; 
let nome = 'Cyndi Lauper';
let idade = 25;

if (idade >= 18) {
    console.log(`É maior de idade, entrada permitida.`);
} else if (idade < 18) {
    console.log(`Caro(a) ${nome}, infelizmente sua entrada não será permitida.`);
} else {
    console.log(`Por favor, digite uma idade válida.`)
}

//Escreva um algoritmo que verifique se uma letra atribuida a uma variável é vogal ou consoante; 
let letra = 'a';

function vogal() {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(`Esta letra é vogal.`)
    } else {
        console.log(`Esta letra é consoante.`);
    }
}
vogal()


// Atribuição e ternário

// Atribua true para a variável bonusSalarial e faça o seguinte algoritmo com ternário: 
// Se o salário for maior que R$ 5000, o bônus é de 10%; 
// Se o salário for menor que R$ 5000, o bônus é de 15%; 
let bonusSalarial = true;
let bonusMaior = 0.15;
let bonusMenor = 0.10;
let salario = 5000;

bonusSalarial = (salario >= 5000) ? `Seu bônus será de ${(salario * bonusMaior)}.` : `Seu bonus será de ${(salario * bonusMenor)}.`;
console.log(bonusSalarial);

//Some 200 ao valor de uma variável que receba 300; 
let tenho = 300;
let guardar = 200;
let total = tenho + guardar;
console.log(total);


// Operadores

// Declare uma expressão que receba NAN; 
let hoje = 'Dezenove';
let amanhã = 'vinte'
console.log(`Faltam ${(amanhã - hoje)} para o meu aniversário.`);

// Compare a sua idade com a de algum parente; 
let minhaIdade = 35;
let irmaoIdade = 31;
if (minhaIdade > irmaoIdade) {
    console.log(`Você é a irmã mais velha.`);
} else {
    console.log(`Você é a irmã mais novinha.`);
}

// Incremente o número 50 e retorne seu valor incrementado; 
let numero = 50;
numero++
console.log(numero);

// Crie uma expressão que o resultado seja 80 utilizando todos os operadores aritméticos; 
let soma = 0 + 80;
console.log(soma);
let subtracao = 100 - 20;
console.log(subtracao);
let multiplicacao = 40 * 2;
console.log(multiplicacao);
let dividao = 160 / 2;
console.log(dividao);
let expoente = 2 ** 2 * 2 ** 2 * 5;
console.log(expoente);

// Receba em três variáveis três notas e depois calcule a média; 
let matematica = 10;
let portugues = 9;
let ingles = 7;
let notas = matematica + portugues + ingles;
let media = notas / 3;
console.log(media);


// Funções

// Crie uma função para que quando a pessoa clicar na tela, exiba um alerta; 
addEventListener('click', function () {
    window.alert(`Você clicou na tela.`)
});

// Crie uma função que calcule o imc e diga qual a classificação; 

function imc(peso, altura) {
    let imc = peso / (altura * 2);

    if (imc <= 24) {
        console.log(`Você está no peso ideal.`);
    } else if (imc >= 29) {
        console.log(`Você está com pré-obesidade.`);
    } else if (imc >= 30) {
        console.log(`Você está obeso.`);
    } else {
        console.log(`Não foi possível calcular.`);
    }
}
imc(70, 1.7)


// DOM

// Utilize o querySelector e procure por um h1 no HTML; 
const titulo = document.querySelector('h1');
console.log(titulo);

// Retorne a url da página criada para esses exercicios; 
console.log(window.location.href);