/* eslint-disable */
// Sin responsabilidad Unica
(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes extends HtmlElement {
      constructor(
          public value: string,
          public placeholder: string,
          id: string,
      ) {
          super(id, 'input');
      }
  }

  class InputEvents extends InputAttributes {
      constructor( value: string, placeholder: string, id: string ) {
          super( value, placeholder, id );
      }

      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }


  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

  console.log({ nameField });

})();

/* eslint-enable */
// Con Responsabilidad Unica
(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  interface HtmlElementProps {
    id: string;
    type?: HtmlType;
  }

  interface InputAttributesProps{
    placeholder: string;
    value: string;
  }

  interface InputElementProps extends HtmlElementProps, InputAttributesProps{ }

  class HtmlElement {
    public id: string;

    public type?: HtmlType;

    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  class InputAttributes {
    public placeholder: string;

    public value: string;

    constructor({ value, placeholder }: InputAttributesProps) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputElement {
    public htmlElement: HtmlElement;

    public inputAttributes: InputAttributes;

    constructor({
      id,
      placeholder, value,
    }: InputElementProps) {
      this.htmlElement = new HtmlElement({ id, type: 'input' });
      this.inputAttributes = new InputAttributes({ placeholder, value });
    }
  }

  // ? Idea para la nueva clase InputElement
  const nameField = new InputElement({
    value: 'Fernando',
    placeholder: 'Enter first name',
    id: 'txtName',
  });

  console.log({ nameField });
})();
