function ArrayLop() {

    const fruits = [`Banana`, `Orange`, `Apple`];

    let fruitsLine = `<ul>`;

    for (let i = 0; i < fruits.length; i++) {
        fruitsLine += `<li>` + fruits[i] + `</li>`;
    }

    return `
    <div>
        <h2>A maneira mais segura de fazer um loop em uma matriz é usando um forloop.</h2>
        ${fruitsLine} </ul>
        <hr>
    </div>
`

};

export default ArrayLop;




