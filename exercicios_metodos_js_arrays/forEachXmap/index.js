function forEachXmap() {

    let numbers = [5, 4, 3, 2, 1]

    //Exemplo retorno forEach
    const numbersForeach = numbers.forEach(element => element * element);
    console.log(numbersForeach) //underfine

    //Exemplo retorno map: devolve um novo array
    //tela
    return `
    <p> The numbers are 
        ${numbers.map((element) => {
            return element * element
        }).filter(x => x >= 9).join('-')} 
    </p>
    `
}

export default forEachXmap;