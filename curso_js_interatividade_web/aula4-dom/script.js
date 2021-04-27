const meuTitulo = document.querySelector('h1'); //

meuTitulo.innerText; //localiza um texto dentro de uma tag

window.alert('Olá mundo');
alert(`Será que vai?`);

// adiciona eventos no tempo de execução, 
// quando o usuário clicar no meuTitulo (h1) imprimi no console
meuTitulo.addEventListener('click', () => {
    console.log(`Aprendendo sobre DOM`);
})


