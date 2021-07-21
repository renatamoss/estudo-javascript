export function MapMetod() {

    const colors = [`blue`, `yellow`, `brown`, `pink`];

    let $arrayLine = `<ul>`;
    colors.map(color => $arrayLine += `<li> O nome da cor é: ${color} </li> `)
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