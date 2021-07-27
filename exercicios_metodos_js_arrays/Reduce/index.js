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

    const total = produtos.map(item => 
        item.preco * 2).reduce((acumulador, valorItem) => acumulador + valorItem, 0) 
    console.log(total)

    return `
    <div>
        <h2>O método reduce() executa uma função reducer para cada item do array, resultando num único valor de retorno(acumulador). </h2>
        <p> Exemplo: (.reduce((acumulador, valorItem) => acumulador + valorItem, 0)), onde 0 é o valor inicial </p>
        <p> Objeto stringify: ${JSON.stringify(produtos)}
        <p> O valor total do item preço * 2 é: ${total} </p>
        <hr>
    </div>
    `
};

