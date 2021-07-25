//Map imprimindo no HTML
export function MapMetodHTML() {

    const colors = [`blue`, `yellow`, `brown`, `pink`];

    // abre ul
    let $arrayLine = `<ul>`;

    //executa o map
    colors.map(function myFunction(color) {
        $arrayLine += `<li> O nome da cor é: ${color.toUpperCase()}; </li> `
    })

    //fecha ul
    $arrayLine += `</ul>`;

    return `
    <div>
        <h2>E o método map() pode ser o mais indicado para alterar os dados pois ele retorna um novo Array com os dados.</h2>
        <p> E como o retorno é um Array nós podemos tirar vantagem disso para encadear outros métodos como (map(), filter(), reduce(), etc.). </p>
        ${$arrayLine}
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
        console.log (item.toUpperCase())
    })
    
};

MapMetod();

