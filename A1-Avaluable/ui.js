// Archivo donde se almacena todos los reneders
export const renderNav = (NAV_ITEMS) => {
    return NAV_ITEMS.map((p) => `
        <button id="${p.id}" class="w-35 h-10 bg-gray-200 text-black text-md rounded-xl ">
            ${p.label}
        </button>
    `).join('');
};

