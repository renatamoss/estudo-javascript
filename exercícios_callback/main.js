//PRIMEIRO EXERCÍCIO////////////////////////////////////////////////
//CRIANDO O BOTÃO NO HTML
function createButton(text, callBack) {
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;

    callBack($button);//INSERINDO A FUNÇÃO CALLBACK ANTES DE INSERIR O BOTÃO ITEM

    $body.insertAdjacentElement("beforeend", $button);

    return $button;
}

//CRIANDO UM BOTÃO ITEM
createButton("SEARCH", (button) => {
    button.style.cssText = `
        background-color: red;
        font-size: 20px;
        color: black;
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        width: 100px;
        `
    button.addEventListener('click', () => {
        window.alert('CLICOU NO SEARCH')
    })
});

//CRIANDO OUTRO BOTÃO ITEM
createButton("LOGIN", (button) => {
    button.style.cssText = `
        background-color: black;
        font-size: 20px;
        color: red;
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        width: 100px;
        `
    button.addEventListener('click', () => {
        window.alert('CLICOU NO LOGIN')
    })
})

//SEGUNDO EXERCÍCIO////////////////////////////////////////////////////////////
//CRIANDO O BOTÃO
function newButton(name, callBack) {
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = name;

    callBack($button);

    $body.insertAdjacentElement("beforeend", $button);
    return $button;
}

//CRIANDO O ITEM DO BOTÃO
newButton("FOLLOW", ($button) => {
    $button.style.cssText = `
    background-color: green;
    font-size: 20px;
    color: write;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    width: 150px;
    `
    $button.addEventListener('click', () => {
        window.alert('CLICOU NO FOLLOW')
    })
})

newButton("FOLLOWING", ($button) => {
    $button.style.cssText = `
    background-color: green;
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    width: 150px;
    `
    $button.addEventListener('click', () => {
        window.alert('CLICOU NO FOLLOWING')
    })
})

//TERCEIRO EXERCICIO////////////////////////////////////////////////
function tittle(text, callBack) {
    const $body = document.querySelector("body");
    const $tittle = document.createElement("h1");
    $tittle.textContent = text;

    callBack($tittle);

    $body.insertAdjacentElement("beforeend", $tittle);
    return $tittle;
}

tittle("EXERCÍCIOS DE CALLBACK", ($tittle) => {
    $tittle.style.cssText = `
    color: red;
    cursor: pointer;
    font-size:30px;
    text-align: center;  
    width: 500px;
    `
    $tittle.addEventListener("mouseover", () => {
        window.alert('VOCÊ PASSOU O MOUSE EM CIMA DO TITULO');
    })
});

//QUARTO EXERCICIO/////////////////////////////////////////////////
function paragrafo(texto) {
    const $body = document.querySelector("body");
    const $paragrafo = document.createElement("p");
    $paragrafo.textContent = texto;

    $body.insertAdjacentElement("beforeend", $paragrafo);

    $paragrafo.style.cssText = `
    font-size: 20px;
           `
}

paragrafo("Este é o PRIMEIRO paragrafo desde exercício;");
paragrafo("Este é o SEGUNDO paragrafo desde exercício;");
paragrafo("Este é o TERCEIRO paragrafo desde exercício;");

//QUINTO exercicio/////////////////////////////////////////////////
function endButton(texto, callBack) {
    const $body = document.querySelector('body');
    const $button = document.createElement('button');
    $button.textContent = texto;

    callBack($button);

    $body.insertAdjacentElement('beforeend', $button);
    return $button;
}

endButton("INICIAR", ($button) => {
    $button.style.cssText = `
    background-color: pink;
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    width: 150px;
   `
    $button.addEventListener("click", () => {
        window.alert("VOCÊ QUER INICIAR ?")
    })
});

endButton("ENCERRAR", ($button) => {
    $button.style.cssText = `
    background-color: pink;
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    width: 150px;
      `
    $button.addEventListener("click", () => {
        window.alert("VOCÊ QUER ENCERRAR ESTA APLICAÇÃO?")
    })
});














