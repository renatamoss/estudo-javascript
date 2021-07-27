export function Entries() {

    const pets = [
        {
            name: `dog`,
            age: 5
        },
        {
            name: `cat`,
            age: 8
        }
    ]

    const cadastro = Object.entries(pets)
    console.log(cadastro)


    return `
        <div>    
        <h2> Object.entries() retorna também um array </h2>
        <p> Onde os elementos são também arrays correspondentes aos pares de propriedades 
        [key, value] enumeráveis encontrados diretamente sobre o objeto. </p>
        <p>A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente. </p>
        <p> Retorno do Object.entries: ${JSON.stringify(cadastro)} </p>
        <hr>
        </div>
        `
}