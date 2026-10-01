// Script main que orquesta todos los scripts
import { NAV_ITEMS } from "./constants.js";
import { nav, footer } from "./elements.js";
import { renderNav } from "./ui.js";
import { showFooter, hideFooter } from "./animate.js";

// Renderizamos nav
nav.innerHTML = renderNav(NAV_ITEMS);


//valores default




footer.addEventListener("mouseenter", () => showFooter(footer));
footer.addEventListener("mouseleave", () => hideFooter(footer));
