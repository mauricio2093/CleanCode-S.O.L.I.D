/* eslint-disable*/
(() => {
  // arreglo de temperaturas celsius
  const temperaturesInCelsius = [33.6, 12.34]; //?
  console.log(temperaturesInCelsius);
  // Dirección ip del servidor
  const serverIp = '123.123.123.123';

  // Listado de usuarios
  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  // Listado de emails de los usuarios
  const usersEmails = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;        // Jump   -> verb  -> canJump
  const canRun = true;          // Run   -> verb  -> canRun
  const hasItems = true;        // Items -> verb  -> hasItems
  const isLoading = false;      // loading -> verb  -> isLoading

  // Otros ejercicios
  // tiempo inicial
  const startTime = new Date().getTime();
  // ....
  // 3 doritos después
  // ...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime;

  // Funciones
  // Obtiene los libros
  function getBooks() {
    throw new Error('Function not implemented.');
  }

  // obtiene libros desde un URL
  function getBooksByUrl( url: string) {
    throw new Error('Function not implemented.');
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea( side: number ) {
    throw new Error('Function not implemented.');
  }

  // imprime el trabajo
  function printJob() {
    throw new Error('Function not implemented.');
  }
})();

function sendEmail(toWhom: string): boolean {
  // verificar correo
  if(!toWhom.includes('@')) return false;

  // construi el cuerpo o mensaje

  // enviar correo

  // si todo sale bien
  return true;
}

function sendEmail1(toWhom: string, from: string, body: string): boolean {  // Es recomendable tres parametros por funcion
  // verificar correo
  if(!toWhom.includes('@')) return false;

  // construi el cuerpo o mensaje

  // enviar correo

  // si todo sale bien
  return true;
}
