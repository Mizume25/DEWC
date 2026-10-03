/** Menu's Principales */
export const initMenu = `
    [1] - Valores por defecto
    [2] - Valores Propios
    Introduzca accion a realizar:
`
export const mainMenu = `
[1] - Ver notas
[2] - Clasificación aprobado/suspendido
[3] - Ver nota media
[4] - Ver mejor y peor nota
[0] - Salir
Introduzca accion a realizar:
`




/** Valores de notas por defecto */
export const DEFAULT_GRADES = [10, 8, 6, 5, 3]

/** Valores nombre de estudiantes */
export const DEFAULT_STUDENTS = ["Anna", "Jordi", "Marta", "Pau", "Laia"];


/** Render Normal */
export const renderStudents = (students, grades) => {
    return students.map((p, i) => `${p} - ${grades[i]}`).join('\n');
}

/** Render con clasificacion */
export const renderIsApproved = (students, grades) => {
    return students.map((p, i) => {
        const IsApproved = grades[i] >= 5 ? "Aprobado" : "Suspendido"
        return (
            `${p} - ${IsApproved}`
        )
    }).join('\n');
}

/** Render con nota promedio */
export const renderAvarageGrades = (students, grades) => {
    let total = 0;

    grades.forEach((p) => {
        total += p
    })
    let avarege = total / students.length
    return `Nota Promedio de los Estudiantes: ${avarege.toFixed(2)}`
}


/** Render con nota promedio */
export const renderStatusGrade = (students, grades) => {
    let max = grades[0];
    let min = grades[0];

    let p_max = 0;
    let p_min = 0;

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > max) {
            max = grades[i];
            p_max = i;
        }
        if (grades[i] < min) {
            min = grades[i];
            p_min = i
        }
    }

    return `
    El mejor alumno es:${students[p_max]} con ${max}
    El peor alumno es: ${students[p_min]} con ${min}
    `


}


export const services = (action, students, grades) => {
  let num = 1;
  switch (action) {
    case 1:
      alert(renderStudents(students, grades))
      break;
    case 2:
      alert(renderIsApproved(students, grades))  
      break;
    case 3:
      alert(renderAvarageGrades(students, grades))
      break;
    case 4:
      alert(renderStatusGrade(students, grades))
      break;
    case 0:
        num = 0
        break;
    default: 
        alert("No reconocemos esta accion")
        return
  }

  return num
}


export const setActionInit = () => {
    const grade = Number(prompt(initMenu));
    return grade;
};

/**
 * Pide y valida el nombre del alumno.
 */
export const setStudentName = (i, currentStudents) => {
    let name = "";

    do {
        name = prompt(`Introduce el nombre del alumno ${i + 1}:`);


        if (name === null || name.trim() === "") {
            alert("El nombre no puede estar vacío.");
            continue;
        }

    
        if (!isNaN(name)) {
            alert("El nombre no puede ser un número.");
            name = "";
        }
       
        if (currentStudents.includes(name.trim())) {
            alert(`El alumno "${name.trim()}" ya ha sido registrado. Introduce un nombre diferente.`);
            name = ""; 
        }
    } while (!name);

    return name.trim();
};

/**
 * Pide y valida la nota del alumno.
 */
export const setStudentGrade = (i) => {
    let grade;

    do {
        const inputGrade = prompt(`Introduce la nota del alumno ${i + 1} (0 a 10):`);

        grade = Number(inputGrade);


        if (
            inputGrade === null || 
            inputGrade.trim() === "" || 
            isNaN(grade) || 
            grade < 0 || 
            grade > 10
        ) {
            alert("Por favor, introduce una nota válida (número entre 0 y 10).");
            grade = NaN; // Reinicia para repetir el bucle
        }
    } while (isNaN(grade));

    return grade;
}




