'use strict'

//Selecionando o elemento por ID:
let tituloSecao = document.getElementById('titulo-secao');

//Selecionar o elemento por classe:
let descricao = document.getElementsByClassName('descricao');

//Selecionar elemento por tag: (pouco usado)
let paragrafos = document.getElementsByTagName('p');

//seletores por CSS: Query Selector:
let minhaLista = document.querySelectorAll('#lista .Item');
let duasListas = document.querySelectorAll('.Item');

let titulo = document.querySelector('#titulo-secao');
let primeiroItem = document.querySelector('.Item');