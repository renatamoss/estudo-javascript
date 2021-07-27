export function Values() {

    const cadastro = [
        {
            name: `Paul`,
            age: 30
        },
        {
            name: `Lisa`,
            age: 25
        }

    ]

    console.log(Object.values(cadastro));
    console.log(cadastro[0].name)
    return `
    <h2> O método Object.values() retorna um array com os valores das propriedades de um dado objeto</h2>
    <p> Na mesma ordem provida pelo for...in laço (sendo a diferença que o laço for-in também enumera as propriedades 
        na cadeia prototype).</p>
    <p> Retorno do Objetct.values: </p>
    <p> ${JSON.stringify(Object.values(cadastro))} </p>
   `

}