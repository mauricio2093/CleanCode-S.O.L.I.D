/* eslint-disable no-unused-expressions */
// Codigo sin refactorizar
(() => {
/* eslint-disable */

  console.log('Codigo sin refactorizado');
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit( fruit: string ): boolean {

      if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
          return true;
      } else {
          return false;
      }
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor( color: string ): string[] {

      if ( color === 'red' ) {
          return ['manzana','fresa'];
      } else if ( color === 'yellow') {
          return ['piña','banana'];
      } else if ( color === 'purple') {
          return ['moras','uvas']
      } else {
          throw Error('the color must be: red, yellow, purple');
      }
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
      if( isFirstStepWorking === true ) {
          if( isSecondStepWorking === true ) {
              if( isThirdStepWorking === true ) {
                  if( isFourthStepWorking === true ) {
                      return 'Working properly!';
                  }
                  else {
                      return 'Fourth step broken.';
                  }
              }
              else {
                  return 'Third step broken.';
              }
          }
          else {
              return 'Second step broken.';
          }
      }
      else {
          return 'First step broken.';
      }
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();

// Codigo refactorizado
(() => {
  /* eslint-enable */

  console.log('Codigo refactorizado');
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?

  const isRedFruit = (fruit: string): boolean => ['manzan', 'cerez', 'ciruela'].includes(fruit);

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitByColor = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['mora', 'uva'],
    };
    if (!Object.keys(fruitByColor).includes(color)) throw Error('the color must be: red, yellow, purple');
    return fruitByColor[color];
    /*
    if (color === 'red') { return ['manzana', 'fresa']; }
    if (color === 'yellow') { return ['piña', ' banana']; }
    if (color === 'purple') { return ['moras', 'uvas']; }
    throw Error('the color must be: red, yellow, purple');
     */

    /*
      switch (color) {
      case 'red':
        return ['manzana', 'fresa'];
      case 'yellow':
        return ['piña', ' banana'];
      case 'purple':
        return ['moras', 'uvas'];
      default:
        throw Error('the color must be: red, yellow, purple');
      }
    */
  }

  // Simplificar esta función
  const isFirstStepWorking = true;
  const isSecondStepWorking = true;
  const isThirdStepWorking = true;
  const isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking !== true) { return 'First step broken.'; }

    if (isSecondStepWorking !== true) { return 'Second step broken.'; }

    if (isThirdStepWorking !== true) { return 'Fourth step broken.'; }

    return (isFourthStepWorking !== true) ? 'Third step broken.' : 'Working properly!';
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  // getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') });
  // Error: the color must be: red, yellow, purple

  // workingSteps
  // Cambiar los valores de la línea 31 y esperar los resultados
  console.log({ workingSteps: workingSteps() });
})();
