//trabalhando com strings

//1- armazenando os dados string:
const nome = 'Renata Marques - armazenado no localStorage';
localStorage.setItem('dadoString', nome); //  chave: 'valor';

//2- buscando os dados string:
const meusDadosString = localStorage.getItem('dadoString');
document.querySelector('[data-string]').innerHTML = meusDadosString;

//3- removendo os dados string: 
//localStorage.removeItem('dadoString');



//trabalhando com objetos

//1- armazenando os dados: transformar objeto em string + setItem:
const dados = { nome: 'Renata', idade: 30, pais: 'Brasil' };
localStorage.setItem('dadosObjeto', JSON.stringify(dados)); //alterando objeto para string

//2- buscando os dados: no localStorage, ainda é uma string
const meusDadosObjeto1 = localStorage.getItem('dadosObjeto');
document.querySelector('[data-objeto]').innerHTML = 
`Meus dados ainda é uma string, armazenada no localStorage: ` + meusDadosObjeto1;

//3- transformando a string em objeto novamente buscando no localStorage
const meusDadosObjeto2 = JSON.parse(localStorage.getItem('dadosObjeto'));

//4- removendo os dados do localStorage:
// localStorage.removeItem('dadosObjeto');



