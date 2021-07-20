const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

${Slice()}

`);

function Slice() {
    const $slice = `
<h1> slice() extrai uma parte de uma string e retorna a parte extraída em uma nova string. </h1>
<p> O método leva 2 parâmetros: a posição inicial e a posição final (final não incluído). </p>
<p> Se um parâmetro for negativo, a posição é contada a partir do final da string.</p>

`
    const $sliceSlice = $slice.slice(5, 11);

    return `
<p> ${$slice} </p>
<p> Veja o retorno  da 4ª à 10ª posição da string: ${$sliceSlice} </p>

<h2> substring()é semelhante a slice(). A diferença é que substring()não aceita índices negativos.</h2> 
`;

}