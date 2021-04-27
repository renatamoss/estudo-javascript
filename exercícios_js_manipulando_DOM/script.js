
//Criando uma classe no id após evento click
//classlist.toggle: Quando apenas um argumento está presente: Toggle class value; Ou seja, se 
//a classe existir, em seguida, removê - lo e retornar false, se não, então adicioná - lo e 
//retornar true.
let btn = document.getElementById('btn');

criandoClasse = () => btn.classList.toggle('classe');

btn.addEventListener('click', criandoClasse);

//esconder ou mostrar DIV no html usando JS
var button = document.getElementById('action-btn');
var container = document.getElementById('container');

mostrarContainer = () => {
    if (container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

button.addEventListener('click', mostrarContainer)

//outra forma de fazer inserindo uma classe do CSS
var buttonB = document.getElementById('action-btn-b');
var containerB = document.getElementById('container-b');

mostrarContainerB = () => containerB.classList.toggle('display');

buttonB.addEventListener('click', mostrarContainerB);

