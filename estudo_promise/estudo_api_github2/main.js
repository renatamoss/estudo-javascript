const url = 'https://api.github.com/users/renatamoss';

const validacao = dados => {
    if (!dados.ok) {
        throw new Error(`Aconteceu erro. Status ${dados.status}`);
    }
    return dados.json();
}

const montarCartao = dados => {
document.querySelector(".principal h2").innerText = dados.name
document.querySelector(".principal img").src = dados.avatar_url
document.querySelector(".principal a").innerText = `@${dados.login}`;
document.querySelector(".principal a").href = dados.html_urll

}

const tratamentoErro = erro => {
    console.log(erro.message);
}

fetch(url)
    .then(validacao)
    .then(montarCartao)
    .then(tratamentoErro)

