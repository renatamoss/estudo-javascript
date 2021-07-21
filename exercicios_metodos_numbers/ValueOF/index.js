export function ValueOf() {
    const $numeros = 1000 + 1000 + 20;
    const $frase2 = `I started my professional change in ${$numeros.valueOf()}.`

    return `
    <div class="valueOf">
        <h2> valueOf() retorna um número como um número. </h2>
        <p> I started my professional change in 1000 + 1000 + 20. </p>
        <p> Na frase acima, com o método valueOf o retorno será o total da soma: </p>  
        <p> ${$frase2} </p>
        <hr>
    </div>
   `
}