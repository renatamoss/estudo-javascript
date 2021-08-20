'use strict'

//Para fins didáticos o passo a passo do código está enumerado de acordo com o seu desenvolvimento.


//7o.Limpar formulário
const limpaFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value =  '';
    document.getElementById('estado').value =  '';
}

//6o. função preencherFormulario conforme Id X objeto
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//3o. Validação do CEP com regex
    const cepValido = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep);

//async: retorno assincrono
const pesquisarCep = async () => {

    //7o.Limpar formulário
    limpaFormulario();

    //1o. pegar o campo no html cep
    const cep = document.getElementById('cep').value;

    //2o. pegar a url da api, onde cep será variável
    const url = `https://viacep.com.br/ws/${cep}/json/`

    //3o. Validação do CEP, se for true executa
    if(cepValido(cep)){
    
        //4o. usar ferramenta nativa JS fetch, ele retorna o valor da url
        //ele retorna uma PROMISE, retorno assincrono, usar await
        const dados = await fetch(url); //retorna um prototype response
        const endereco = await dados.json(); //retorna um prototype object 

        //5o. tratamento de erro: se a propriedade JSON tem o campo 'erro: true'
        //ele usa a propriedade hasOwnProperty. Se for true chama 6o.preencherFormulario.
        if(endereco.hasOwnProperty('erro')) {
            document.getElementById('rua').value = `CEP não encontrado.`;
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('rua').value = `CEP inválido.`;
    }
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);


    // Retorno do JSCON VIA CEP
    //{
    //     "cep": "12235-610",
    //     "logradouro": "Rua Teresina",
    //     "complemento": "",
    //     "bairro": "Parque Industrial",
    //     "localidade": "São José dos Campos",
    //     "uf": "SP",
    //     "ibge": "3549904",
    //     "gia": "6452",
    //     "ddd": "12",
    //     "siafi": "7099"
    //   }
