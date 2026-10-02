/** Menu's Principales */
export const initMenu = `
    [1] - Valores por defecto
    [2] - Valores Propios
`
export const mainMenu = `
[1] - Ver notas
[2] - Clasificación aprobado/suspendido
[3] - Ver nota media
[4] - Ver mejor y peor nota
[0] - Salir`

/** Valores por defecto */
export const DEFAULT_VALUES = [
    {
        "name": "Anna",
        "grade": 10,
    }, 
    {
        "name": "Jordi",
        "grade": 8 
    },
    {
        "name": "Marta",
        "grade": 6
    }, 
    {
        "name": "Pau",
        "grade": 5
    },
    {
        "name": "Laia",
        "grade": 3
    }
]

export const renderDefaultValues = (students) => {
  return students
    .map((p, i) => `(${i + 1}) ${p.name} - ${p.grade}`)
    .join("\n")
}

export const setActionInit = () => {
  const grade = Number(prompt(initMenu , "Introduzca la accion a realizar"));
  return grade;
};

export const setStudent = (i) => {
  const name = prompt(`Introduce el nombre del alumno ${i + 1}:`);
  const grade = Number(prompt(`Introduce la nota del alumno ${i + 1}:`));

  return { name, grade };
};




 