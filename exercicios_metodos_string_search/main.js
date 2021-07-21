import IndexOf from "./objetcts/IndexOf/index.js";
import StringSearch from "./objetcts/StringSearch/index.js";
import { StringIncludes } from "./objetcts/StringIncludes/index.js"

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

<h1> Nestes exercícios estou revisando métodos String como também  Web Components com JS puro. </h1>

${IndexOf()}
${StringSearch()}
${StringIncludes()}

`);