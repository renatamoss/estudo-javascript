import ArrayLop from "./ArrayLoop/index.js";
import ForEach from "./ForEach/ForEach.js";
import { Push } from "./Push/index.js";
import { MapMetodHTML } from "./Map/index.js";
import forEachXmap from "./forEachXmap/index.js"
import Filter from "./Filter/index.js"
import { Reduce } from "./Reduce/index.js";
import { Entries } from "./Reduce/Entries/Entries.js";
import { Values } from "./Values/Values.js";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

${ArrayLop()}
${MapMetodHTML()}
${ForEach()}
${forEachXmap()}

${Push()}
${Filter()}
${Reduce()}
${Entries()}
${Values()}


`);