function Filter() {

    //dados
    const numbers = [9, 6, 3, 0];

    //tela
    return ` 
    <h2>O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.</h2>
    <p> Array: ${numbers.join(', ')}<p>
    <p> Retorno do método map(item) aplicado em conjunto o método .filter(x => x >= 6).join(" e "): </p>
    <p> The return is 
    ${numbers.map((item) => {
        return item
    }).filter(x => x >= 6).join(" e ")} 
    </p>
    <hr>
    `
};

export default Filter;


