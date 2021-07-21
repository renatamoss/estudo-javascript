export function ParseFloat() {
    const $phrase = `2021 feliz!`;
    const $number = parseFloat("2021 feliz!");

    return `
    <div>
        <h2> parseFloat()analisa uma string e retorna um número. </br>
        Espaços são permitidos. Apenas o primeiro número é retornado: </h2>
        <p> Esta é a frase completa: ${$phrase}. Este é o retorno do método: ${$number} </p>
        <hr>
    </div>
    `
}