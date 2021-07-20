
import Renata from './component/index.js';

const $root = document.querySelector("#root");
$root.insertAdjacentHTML(
    "beforeend",
    `
${Renata(2)}
`
);








