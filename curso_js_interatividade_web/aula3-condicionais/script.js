// uso do IF: quando tem uma comparação
let idade = 18;

if (idade >= 18) { // recebe uma expressão se for verdadeira
    console.log('Você tem acesso.');
} else {
    console.log('Você não tem acesso.');
}

// outro uso do IF
let sinalAmarelo = false;
let sinalVermelho = false;
let sinalVerde = false;
let sinalPiscando = false;

if(sinalAmarelo){
    console.log('Reduza a velocidade.');
}else if (sinalVermelho){
    console.log('Pare o veículo!');
}else if(sinalVerde){
    console.log('Continue...');
}else if(sinalPiscando){
    console.log('Atenção!');
} else {
    console.log('O sinal está desativado, pare e depois continue.');
}

// && operador: os dois tem que ser true
let usuarioIdade = 17;

if (usuarioIdade >= 18 && usuarioIdade <= 100) {
    console.log('Você tem acesso');
}
else {
    console.log('Você é menor de idade e não acesso.');
}

// SWITCH: quando uma variável é constante ou recebe um ou poucos valores
let sinal = 'amarelo';

switch (sinal) {
    case 'amarelo':
        console.log('Reduza a velocidade');
        break;
    case 'vermelho':
        console.log('Pare');
        break;
    case 'verde':
        console.log('Continue');
        break;
    default:
        console.log('Não tem acesso');
}

// Exercícios Condicionais

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let minhaIdade = 35;
let irmao = 41;

if (minhaIdade >= irmao) {
    console.log('Você é a irmã mais velha.');
} else {
    console.log('Você é a irmã mais nova.');
}

// Escreva um algoritmo que irá verificar a bebida favorita e 
// imprimir no console qual foi dentre as seguintes opções: 
// Café, Suco, Capuccino, Cerveja, Água, Refrigerante

let bebidaFavorita = 'Suco';

switch (bebidaFavorita) { // Também pode incluir direto o valor dentro do switch
    case 'Café':
        console.log('Café não é sua bebida favorita.');
        break;
    case 'Suco':
        console.log('Obrigada(o) por informar sua bebida favorita!');
        break;
    case 'Capuccino':
        console.log('Capuccino não é sua bebida favorita.');
        break;
    case 'Cerveja':
        console.log('Cerveja não é sua bebida favorita.');
        break;
    case 'Água':
        console.log('Água não é sua bebida favorita.');
        break;
    case 'Refrigerante':
        console.log('Refrigerante não é sua bebida favorita.');
        break;
    default:
        console.log('Bebida não disponível');
        break;
}















