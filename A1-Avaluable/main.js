import { NAV_ITEMS } from "./constants.js";
import { nav } from "./elements.js";
import { renderNav } from "./ui.js";


// Renderizamos nav
nav.innerHTML = renderNav(NAV_ITEMS);

