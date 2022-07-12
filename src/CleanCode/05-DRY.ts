/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* ========== PRINCIPIO DRY ===========
  Don't Repeat Youtself
  " Si quieres ser un programador productivo esfuerzate en escribir codigo legible" -Rober C. Martin
  . Simplemente es evitar tener duplicidad de codigo.
  . Simplifica las pruebas.
  . Ayuda a centralizar procesos-
  . Aplicar el principio DRY, usualmente lleva a refactorizar
*/
type Size = '' | 'S' | 'M' | 'XL';
class Product {
  public name: string;

  public price: number;

  public size: Size;

  constructor(name: string = '', price: number = 0, size: Size = '') {
    this.name = name;
    this.price = price;
    this.size = size;
  }

  toValidation = (): boolean => {
    for (const key in this) {
      if (typeof this[key] === 'string' && (<string> this[key]).length <= 0) throw Error(`${key} is empty`);

      if (typeof this[key] === 'number' && this[key] <= 0) throw Error(`${key} is 0`);
    }
    return true;
  };

  toString = () => {
    if (!this.toValidation) return;
    return `${this.name} (${this.price}), ${this.size}`;
  };
}
(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'S');
  console.log(bluePants.toString());
})();
