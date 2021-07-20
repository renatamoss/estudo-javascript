const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<p> ECMAScript 2017 adicionou dois métodos String: padStart e padEndpara suportar preenchimento no início e no final de uma string. </p>
<p> O código do produto é ${padStart()} </p>

`);

function padStart() {
    const $text1 = `6`;
    const $text2 = $text1.padStart(8, 0);

    return $text2;

}