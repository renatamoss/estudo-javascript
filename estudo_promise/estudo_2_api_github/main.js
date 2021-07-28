const url = 'https://api.github.com/users/renatamoss';

const validacao = dados=>{
    if(!dados.ok){
        throw new Error(`Aconteceu erro. Status: ${dados.status}`);
    }
    
    return dados.json();
}

const montarCartao = dados => {
    document.querySelector(".cartao img").src = dados.avatar_url;
    document.querySelector(".cartao img").alt = dados.name;
    document.querySelector(".cartao h1").innerText = dados.name;
    document.querySelector(".cartao a").innerText = `@${dados.login}`;
    document.querySelector(".cartao a").href = dados.html_url;
    document.querySelector(".cartao p").innerText = dados.followers;
}

const tratamentoErro = erro => {
    console.log(erro.message);
}

fetch(url)
    .then(validacao)
    .then(montarCartao)
    .catch(tratamentoErro);