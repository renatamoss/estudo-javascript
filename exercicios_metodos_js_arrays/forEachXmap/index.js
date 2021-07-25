function forEachXmap() {

    let numbers = [5, 4, 3, 2, 1]

    //Exemplo retorno forEach
    const numbersForeach = numbers.forEach(element => element * element);
    console.log(numbersForeach) //underfine

    //Exemplo retorno map: devolve um novo array
    const numbersMap = numbers.map(element => element * element).filter(x => x >= 9);
    console.log(numbersMap) //25, 16 , 9

}

export default forEachXmap;