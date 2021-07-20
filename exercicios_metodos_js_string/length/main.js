const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

${Lenght()}

`);

function Lenght() {
    const $lenght = `<p> A lengthpropriedade retorna o comprimento de uma string</p>`;
    const $lenghtLenght = $lenght.length;

    return `
    The lenght of the string is ${$lenghtLenght}.
    `;
}