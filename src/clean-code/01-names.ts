/* eslint-disable*/
(() => {
// Ejemplo
// Archivos a evaluar - files to evaluate
const fs = [
  { id: 1, f: false },
  { id: 2, f: false },
  { id: 3, f: true },
  { id: 4, f: false },
  { id: 5, f: false },
  { id: 7, f: true },
];

//buena escritura
const filesToEvaluate = [
  { id: 1, flagged: false },
  { id: 2, flagged: false },
  { id: 3, flagged: true },
  { id: 4, flagged: false },
  { id: 5, flagged: false },
  { id: 7, flagged: true },
];

// Archivos marcados para borrar - files to delete
//const arhivos = fs.map( f => f.f );

// buena escritura
const arhivos = filesToEvaluate.map( fileToEvaluate => fileToEvaluate.flagged );
// malos nombres
class UserImplementation { };
class UserMixin { };
class AbstractUser { };
interface IUser{ };

// Mejor
class User { }
interface User { }

// Todo: Tarea

// día de hoy - today
const ddmmyyyy = new Date();   //mal
const toDay = new Date();     //bien

// días transcurridos - elapsed time in days
const d: number = 23;     //mal
const elapsedTimeInDay: number = 23;    //bien

// número de archivos en un directorio - number of files in directory
const dir = 33;         //mal
const numberOfFilesInDirectory = 33;    //bien

// primer nombre - first name
const nombre = 'Fernando';        // mal
const firstName = 'Fernando';       // BIEN
// primer apellido - last name
const firstLastNAme = 'Herrera';    // BIEN

// días desde la última modificación - days since modification
const dsm = 12;    // mal
const daysSinceLastModification = 12;   // BIEN

// cantidad máxima de clases por estudiante - max classes per student
const max = 6;  // mal
const maxClassPerStudent = 6;   // BIEN
})();
