// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href);

//OU: retornar a URL quando clicar no html

function mostrarURL() {
    const url = window.location.href;
    console.log(url);
}
window.addEventListener('click', mostrarURL);

// Seleciona o primeiro elemento da página que
// possua a classe ativa

const primeiroElemento = document.querySelector('.paragrafo'); // retorna o primeiro elemento ativo
console.log(primeiroElemento);

//Ou:

const retorno = document.getElementsByClassName('paragrafo'); // retorna todas as classes com este nome
console.log(retorno);

//retorne a largura da janela

console.log(window.innerWidth); // largura
console.log(window.outerHeight); // altura



