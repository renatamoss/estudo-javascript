//Map imprimindo no HTML
export function MapMetodHTML() {

    //dados
    const colors = [`blue`, `yellow`, `brown`, `pink`];

    //tela
    return `
    <div>
        <h2>E o método map() pode ser o mais indicado para alterar os dados pois ele retorna um novo Array com os dados.</h2>
        <p> E como o retorno é um Array nós podemos tirar vantagem disso para encadear outros métodos como (map(), filter(), reduce(), etc.). </p>
        <ul>
            ${colors.map((color) => {
            return `<li> The color is ${color}</li>`
            }).join('')}
        </ul>
        <hr>
    </div>
`
};

//Map imprimindo no CONSOLE
export function MapMetodConsole() {

    const numbers = [`one`, `two`, `three`];

    numbers.map((item, index, array) => {
        console.log(item, index, array);
    });

}

MapMetodConsole();

//MAP com método array
export function MapMetod() {

    const names = [`Paul`, `Brian`, `John`];

    //método string sózinho: retorna a array
    const namesString = names.toString();
    console.log(namesString.toUpperCase())

    //método string com map: retorna item ou outros parâmetros (index, array)
    names.map((item) => {
        console.log(item.toUpperCase())
    })

};

MapMetod();


