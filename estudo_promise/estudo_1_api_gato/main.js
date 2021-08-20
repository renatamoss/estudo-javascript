//Referência para este estudo:
https://github.com/gutoffline/aula-promises

//EXERCÍCIO 1///////////////////////////////////
console.log('PRIMEIRO');

setTimeout(() => console.log('SEGUNDO'), 0);

Promise.resolve()
.then(() => console.log('TERCEIRO'));

console.log('QUARTO');


//EXERCÍCIO 2///////////////////////////////////
let numero = 9;
setTimeout(() => {
    numero += 10;
    console.log(numero)
}, 0);

console.log(1000);


//EXERCÍCIO 3//////////////////////////////////
const myPromise = new Promise( (resolve, reject) => {} )
//A resolve é a função que deve ser invocada quando a operação assíncrona 
//que a gente fizer tiver sucesso, e, a reject deve ser invocada quando 
//a operação assíncrona falhar.

const minhaPromisse = new Promise((resolve, reject) => {
    const numero = 2222;
    resolve(numero);
    reject("Deu erro essa promise");
});

minhaPromisse
.then((valor) => {
    console.log(valor)
    const novoValor = valor * 2 
    return novoValor;
})
.then(novoValor => {
    console.log(novoValor)
    const terceiroValor = novoValor - 444
    return terceiroValor;
})
.then(terceiroValor => {
    console.log(terceiroValor)
})
.catch(valorErro => {
    console.log(valorErro);
})

//EXERCÍCIO 4///////////////////////////////////
//REQUISIÇÃO API 

const url = 'https://api.thecatapi.com/v1/images/search';
fetch(url)

.then(dadosDoGato => {
    return dadosDoGato.json()
})
.then(([dadosDoGato]) => {
    document.querySelector('#meu-gato').src= dadosDoGato.url;
})
.catch(erro => {
    throw new Error(`Aconteceu um erro. Status: ${dadosDogato.status}`);
})



