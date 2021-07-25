//Array Loop no HTML
function ArrayLop() {

    const fruits = [`Banana`, `Orange`, `Apple`];

    //abre ul
    let fruitsLine = `<ul>`;

    // executa for para cada item
    for (let i = 0; i < fruits.length; i++) {
        fruitsLine += `<li>A fruta é ` + fruits[i].toUpperCase() + `</li>`;
    }

    //fecha ul 
    fruitsLine += `</ul>`;


    return `
    <div>
        <h2>A maneira mais segura de fazer um loop em uma matriz é usando um forloop.</h2>
        ${fruitsLine} 
        <hr>
    </div>
`

};

//Array Loop no console
function ArrayLoopConsole() {
    const woman = [`Ana`, `Lia`, `Lisa`];
    console.log(woman)

    for (let i = 0; i < woman.length; i++) {
        console.log(woman[i].toUpperCase())
    }
}
ArrayLoopConsole();

export default ArrayLop;




