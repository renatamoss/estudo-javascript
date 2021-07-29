//EXERCÍCIO 1////////////////////////////////////////
function jaREalizada() {
    return Promise.resolve('12235610')
}

jaREalizada()
    .then(function (cep) {
        return window
            .fetch('https://viacep.com.br/ws/' + cep + '/json/')
    })
    .then(function (data) {
        return data.json()
    })
    .then(function (data) {
        console.log(data)
    })

//EXERCÍCIO 2////////////////////////////////////////
const url = 'https://viacep.com.br/ws/12235610/json/'

const validacao = dados=>{
    if(!dados.ok){
        throw new Error(`Aconteceu erro. Status: ${dados.status}`);
    }
    
    return dados.json();
}

const montarCartao = dados => {
document.querySelector(".cartao .cep").innerText = dados.cep;
document.querySelector(".cartao .logradouro").innerText = dados.logradouro;
document.querySelector(".cartao .bairro").innerText = dados.bairro;
document.querySelector(".cartao .cidade").innerText = dados.localidade;
}

const tratamentoErro = erro => {
    console.log(erro.message);
}

fetch(url)
    .then(validacao)
    .then(montarCartao)
    .then(tratamentoErro);



