// function areaQuadrado(Lado){
//     return lado * lado;
// }

// areaQuadrado(4);

// function dobraValor() {
//     return 2;
// }

// var total = 5 * dobraValor()


//Exemplo IMC:
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

console.log(imc(90, 1.70));
console.log(imc(60, 1.65));

//Exemplo Idade:
function maioridade(idade) {
    if (idade >= 18) {
        return 'Você tem acesso.'
    } else if (idade < 18) {
        return 'Você não tem acesso.'
    } else {
        return 'Insira um valor válido.'
    }
}

console.log(maioridade(12));

//Callback - evento de clique - quando clica o que eu faço? função console 'Clicou'
addEventListener('click', function () { // addEventListener é um método nativo do JS
    console.log('Clicou!')
    window.alert('Você clicou na tela.')
});

// Função dentro de outra Função

let profissao = 'Desenvolvedora';

function dados() { //função pai, consigo acessar esta dentro do escopo
    let nome = 'Ana';
    let idade = 23;
    function maisDados() {
        let endereco = 'Vila Xavier';
        return `${nome} , ${idade} , ${profissao} , ${endereco}`;
    }

    console.log(maisDados());
}
dados(); // estou invocando a função dados, dentro dela temos a função maisDados

// Outro exemplo:
function test() {
    return profissao;
}

console.log(test());

//CallBack: estou esperando algum eventou ocorrer e depois executo uma função
addEventListener('click',function () {
    console.log('Clicou')
    window.alert('Você clicou na tela')
})


// Exercícios de funções:

//Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(tamanhoLado) {
    let resultado = tamanhoLado * 4;
    return resultado;
}

let perimetroQuadrao = (perimetro(10));
console.log(perimetroQuadrao);

//outra forma de fazer este exercício
function perimetro(lado) {
    return lado * 4
}
let perimetroTotal = (perimetro(10));
console.log(perimetroTotal);


// Crie uma função que retorne o seu nome completo
function nomeCompleto() {
    let nome = 'Renata';
    let sobrenome = 'Marques';
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto());


// Crie uma função que verifica se um número é par
function par(numero) {
    let acharpar = numero % 2 == 0;
    return acharpar;
}
let numero = 10;
let resultado = (par(numero));
if (resultado == true) {
    console.log('O numero ' + numero + ' é par.');
} else {
    console.log('O número ' + numero + ' não é par.');
}

//outra forma de fazer este exercício:
function verificaPAr(numero) {
    if (numero % 2 === 0) {
        console.log('O número é par');
    } else if (numero % 2 === 1) {
        console.log('O número é impar');
    } else{
        console.log('Número inserido de forma incorreta.');
}
}

// Crie uma função que mostrará no console o seu nome quando o evento 'scroll' ocorrer
function mostrarNome() {
    let nome = 'Renata Marques';
    console.log(nome);
}
window.addEventListener('scroll', mostrarNome);

// Arrow Functions outra forma de fazer este exercício
addEventListener('scroll' , () => {
    let nome2 = 'Ana';
    console.log(nome2);
})
