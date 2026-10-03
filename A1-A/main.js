import * as ul from './utils.js'
/** Variable de control */
let DEFAULT_VALUE = false
let students = []
let grades = []

const init = () => {
   let msg = "";
   let action;
  do {
    action = ul.setActionInit();
   
    if (action === 1) {
      DEFAULT_VALUE = true
      msg = "Se ha escogido la opcion de valores por defecto !"
    } else if (action == 2) {
      DEFAULT_VALUE = false
      msg = "Se ha escogido la opcion de valores propios !"
    } else {
      alert("No se reconoce esta accion, porfavor intente de nuevo")
    }

  } while (action != 1 && action != 2);

  alert(msg)
  if (!DEFAULT_VALUE) {
    for (let i = 0; i < 5; i++) {
      let name = ul.setStudentName(i, students);
      let grade = ul.setStudentGrade(i);
    
      students.push(name);
      grades.push(grade);
      
    }
  }
}



const main = () => {
  let output = 1
  do {

    let action = Number(prompt(ul.mainMenu))
    if (DEFAULT_VALUE) {
      output = ul.services(action, ul.DEFAULT_STUDENTS, ul.DEFAULT_GRADES)
    } else {
      output = ul.services(action, students, grades)
    }
  } while (output != 0);
}


init();

main();
