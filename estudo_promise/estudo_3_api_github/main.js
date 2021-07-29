function perfilRenata() {

    const $root = document.querySelector(".root");

    $root.insertAdjacentHTML("beforeend", `
       
    <h1>Esta sou eu, prazer!</h1>
    <h2></h2>
    <img>
    <h3>VISITE MEU GITHUB:</h3>
    <a></a>
        `)

}

perfilRenata()

const url = 'https://api.github.com/users/renatamoss';

const validacao = dados => {
    if (!dados.ok) {
        throw new Error(`Aconteceu erro. Status ${dados.status}`);
    }
    return dados.json();
}

const montarCartao = dados => {
    document.querySelector(".root h2").innerText = dados.name
    document.querySelector(".root img").src = dados.avatar_url
    document.querySelector(".root a").innerText = `@${dados.login}`;
    document.querySelector(".root a").href = dados.html_urll

}

const tratamentoErro = erro => {
    console.log(erro.message);
}

fetch(url)
    .then(validacao)
    .then(montarCartao)
    .then(tratamentoErro)



