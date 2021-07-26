export function Reduce() {

    const produtos = [
        {
            nome: `celular`,
            preco: 400
        },
        {
            nome: `carregador`,
            preco: 100
        }
    ]

    const total = produtos.map(item => item.preco * 2).reduce((acumulador, valorItem) => acumulador + valorItem, 0) //O 0 é o valor inicial
    console.log(total)

    return `
    <div>
        <h2>O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno. </h2>

        <hr>
    </div>
    `
};

