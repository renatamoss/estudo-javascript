const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<p> O método concat () junta duas ou mais strings: </p>

${Concat()}

`);

function Concat() {
    const $text1 = `The more you listen, `;
    const $text2 = `The better you speak. `;
    const $text3 = `The more you read,`;
    const $text4 = `The better you write.`

    const $frase1 = $text1.concat(" ", $text2);
    const $frase2 = $text3.concat(" ", $text4);

    return `
<p> ${$frase1} </p>
<p> ${$frase2} </p>
`;


}