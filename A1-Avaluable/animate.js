// Funciones de animacion
export function showFooter(footer) {
    footer.classList.remove("-bottom-16");
    footer.classList.add("bottom-0");
}

export function hideFooter(footer) {
    footer.classList.remove("bottom-0");
    footer.classList.add("-bottom-16");
}