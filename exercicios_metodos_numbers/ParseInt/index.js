export function ParseInt() {
    const $numero = 33.33;
    const $numeroInteiro = parseInt($numero);

    return `
<div>
    <h2> parseInt()analisa uma string e retorna um número inteiro. </br>
    Espaços são permitidos. Apenas o primeiro número é retornado. </h2>
    <p> Número Float: 33,00. Retorno do método: ${$numeroInteiro} </p>
    <hr>
</div>
`
}