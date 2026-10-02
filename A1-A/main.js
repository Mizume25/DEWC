import { DEFAULT_VALUES, initMenu, setActionInit, renderDefaultValues , mainMenu } from "./utils.js"



const init = () => {
  const action = setActionInit();
  
  if(action === 1) {
    alert("Has escogido los valores por defecto\n" + renderDefaultValues(DEFAULT_VALUES))
  } else {
    alert("Aun no esta listo")
  }

}

const services = (action) => {
  switch (action) {
    case 1:
      alert(renderDefaultValues(DEFAULT_VALUES))
      break;
    case 2:
    default:
      break;
  }
}


const main = () => {
  do {
    
    alert(mainMenu)
    let action = prompt("Introduce la accion a realizar:")
  } while (action != 0);
}


init();
main();
