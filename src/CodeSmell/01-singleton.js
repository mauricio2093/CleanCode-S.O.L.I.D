/* eslint-disable no-new-object */
// no es recomendable usar
const Singleton = (function () {
  let instance;

  function createInstance() {
    return new Object('I am the instance');
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
}());

function main() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Misma instancia? ', (instance1 === instance2));
}

main(); // las instancias son las mismas se almacenan en el mismo espacio de memoria
