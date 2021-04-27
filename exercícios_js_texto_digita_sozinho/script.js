//Métodos Array:
//método split(): que permite dividir/separar strings, o último para o primeiro
//método reverse(): inverte os itens de um array. 
//O primeiro elemento do array se torna o último e o último torna-se o primeiro.

const elemento = document.querySelector('#texto');
const texto = "O Javascript é muito interessante!";
const intervalo = 100;

function showTexto(elemento, texto, intervalo) {
    const divideReverte = texto.split("").reverse();
    const aplicaIntervalo = setInterval(() => {

        if (!divideReverte.length) {
            return clearInterval(aplicaIntervalo);
        }

        const next = divideReverte.pop();
        
        elemento.innerHTML += next;

    }, intervalo)
}

showTexto(elemento, texto, intervalo);
