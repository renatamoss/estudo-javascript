import { ValueOf } from "./ValueOF/index.js";
import { NumberMetod } from "./Number/index.js";
import { ParseInt } from "./ParseInt/index.js";
import { ParseFloat } from "./ParseFloat/index.js";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `
 
<h1> Nestes exercícios estou revisando métodos NUMBERS </br>
bem como estudando WEB COMPONENTS com JS puro.</h2>

${ValueOf()} 
${NumberMetod()}
${ParseInt()}
${ParseFloat()}

`);

