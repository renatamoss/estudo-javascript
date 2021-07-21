function ForEach() {

    const pets = [`Cat`, `Dog`, `Bird`];
    
    let petsLine = `<ul>`;

    pets.forEach(myFunction);

    function myFunction(value) {
        petsLine += `<li>` + value + `</li>`
    }

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

export default ForEach;

