let num = 0;
while (num < 6) {
    console.log(num);
    num++
}

for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

//forEach: laço de repetição para percorrer todos os elementos de uma Array
let comidaFavorita = ['Churrasco', 'Lasanha', 'Sorvete', 'Queijo'];

comidaFavorita.forEach(function () {
    console.log(comidaFavorita[2]); //retornou sorvete
});

//length: determina o final da estrutura de repetição(quando não tenho quantidade total)
for (let i = 0; i < comidaFavorita.length; i++) {
    console.log(comidaFavorita[i])
}

for (; num < 20;) {
    console.log(num)
    num++
}

//OUTRO EXEMPLO DE REPETIÇÃO PARA PRATICAR:
let dados = ['Ana', 'Paula', 23, 'Araraquara'];

for (let i = 0; i < dados.length; i++) {
    console.log(dados[i]);
}

// Exercicios de repetição: 

// Crie uma array que contenha cinco das suas frutas favoritas
// Interaja com a array acima utilizando um loop, para mostrar
// no console a seguinte mensagem, `Minha fruta favorita é ${fruta}`,
// com todos os itens do array criado
let frutas = ['Morango', 'Laranja', 'Banana', 'Abacate', 'Cereja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Minha fruta preferida é ${frutas[i]}.`);
}

//outra forma de fazer este exercício:
frutas.forEach(function (fruta) {
    console.log('Minha fruta favorita é ' + fruta);
})

// Crie um loop que imprima todos os números pares até 50
for (let n = 0; n <= 50; n++) {
    if (n % 2 == 0) {
        console.log(n);
    }
}