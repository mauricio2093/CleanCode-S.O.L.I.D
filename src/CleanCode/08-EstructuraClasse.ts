/* eslint-disable no-underscore-dangle */
class HtmlElement {
  /* =========== Comenzar con lista de Propiedad =============
    1. Propiedades Estáticas.
    2. Propiedades Públicas de último.
  */
  public static domReady: boolean = false;

  private id: string;

  private type: string;

  private updateAt: number;
  /* ======================================================== */

  /* ================== Métodos ===================
    1. Empezando por los contructores estáticos.
    2. El constructor.
    3. Costructor privado.
    3. Segudamente métodos estáticos.
    4. Métodos privados después.
    5. Resto de métodos de instancia ordenados de mayor a menor importancia.
    6. Getter y Setters al final.
  */
  static createInput(id: string) {
    return new HtmlElement(id, 'input');
  }

  constructor(id: string, type: string) {
    this.id = id;
    this.type = type;
    this.updateAt = Date.now();
  }

  setType(type: string) {
    this.type = type;
    this.updateAt = Date.now();
  }

  get _id(): string {
    return this._id;
  }
}

const htmlElement = new HtmlElement('', '');
console.log(htmlElement._id);
