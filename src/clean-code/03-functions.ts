/* eslint-disable no-unused-vars */
(() => {
  function getMovieById(movieId: string): void {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast
  function getMovieCastByInfo(movieId: string): void {
    console.log({ movieId });
  }

  function getUserBio(ActorId: string): void {
    console.log({ ActorId });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  function createMovie({
    title,
    description,
    rating,
    cast,
  }: Movie): void {
    console.log({
      title,
      description,
      rating,
      cast,
    });
  }

  function createNewActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  // Condiciones
  /* eslint-disable */
  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if (isDead) {
        result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }
    return result;
  };

  /* eslint-enable */
  const getPayAmountFix = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return (isRetired) ? 3000 : 4000;
  };

  getPayAmountFix({
    isDead: false,
    isSeparated: true,
    isRetired: false,
  });
})();
