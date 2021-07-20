const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<p> O replace()método substitui um valor especificado por outro valor em uma string </p>
<p> O replace()método não altera a string em que é chamado. Ele retorna uma nova string. </p>

${Replace()}

`);

function Replace() {
    const $replace = `JavaScript é difícil`.replace('difícil', 'fácil');

    return $replace;
}