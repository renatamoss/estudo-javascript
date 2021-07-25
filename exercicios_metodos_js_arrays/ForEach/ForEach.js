//ForEach no HTML:
function ForEach() {

    const pets = [`Cat`, `Dog`, `Bird`];

    //abre ul
    let petsLine = `<ul>`;

    // executa forEach para cada item
    pets.forEach(myFunction);
    
    function myFunction(item) {
        petsLine += `<li> The pet is ` + item.toUpperCase() + `</li>`
    }

    //fecha ul
    petsLine += `</ul>`; //abre e fecha ul

    return `
    <div>
        <h2> O método forEach() recebe uma função como argumento e a executa uma vez para cada elemento do Array.</h2>
        <p> No entanto, ao invés de retornar um novo array como o método map(), ele retorna undefined.</p>
        ${petsLine}
        <hr>
    </div>
    `
};


//FOREACH no console
const verbs = [`speak`, `cry`, `walk`];
console.log(verbs)

verbs.forEach(element => {
    console.log(`This is importants verbs: ` + element.toUpperCase())

});

export default ForEach;






