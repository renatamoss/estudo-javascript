const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<p> Uma string é convertida em maiúsculas com toUpperCase() </p>
<p> Uma string é convertida para minúsculas com toLowerCase() </p>
${toUpperCase()}

`);

function toUpperCase() {
    const $toUpperCase = `Adoro estudar Javascript`.toUpperCase();
    const $toLowerCase = `AMO ESTUDAR JAVASCRIPT`.toLowerCase();
    return `
    <h2> to Upper Case: ${$toUpperCase} </h2>
    <h2> to Lower Case: ${$toLowerCase} </h2>
    `;
}