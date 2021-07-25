import ArrayLop from "./ArrayLoop/index.js";
import ForEach from "./ForEach/ForEach.js";
import { Push } from "./Push/index.js";
import { MapMetodHTML } from "./Map/index.js";
import forEachXmap from "./forEachXmap/index.js"
import Filter from "./Filter/index.js"

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

${ArrayLop()}
${ForEach()}
${MapMetodHTML()}
${forEachXmap()}

${Push()}
${Filter()};


`);