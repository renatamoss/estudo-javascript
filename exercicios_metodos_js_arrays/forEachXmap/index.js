function forEachXmap() {

    let numbers = [5, 4, 3, 2, 1]

    //Exemplo retorno forEach
    const numbersForeach = numbers.forEach(element => element * element);
    console.log(numbersForeach) //underfine

    //Exemplo retorno map: devolve um novo array
    //tela
    return `
    <h2> Diferença entre forEach X Map: map(): </h2>
    <p>O método map() invoca a função callback passada por argumento 
    para cada elemento do Array e devolve um novo Array como resultado.</p> 
    <p>O método forEach() executa uma dada função em cada elemento de um array.</p>

    <p> Array: ${numbers.join(', ')}</p>
    <p> Retorno abaixo do método map (return element * element) com o método filter(x => x >= 9): </p>
    <p> The numbers are 
        ${numbers.map((element) => {
        return element * element
    }).filter(x => x >= 9).join('-')} 
    </p>
    <hr>
    `
}

export default forEachXmap;