import ArrayLop from "./ArrayLoop/index.js";
import ForEach from "./ForEach/ForEach.js";
import { Push } from "./Push/index.js";
import { MapMetod } from "./Map/index.js";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", `

${ArrayLop()}
${ForEach()}
${Push()}
${MapMetod()}


`);