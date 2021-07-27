import { JSONparse } from "./index.js";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(`beforeend`,

`
${JSONparse()}


`


)