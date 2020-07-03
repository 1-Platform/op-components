import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-hello-world.scss';

@customElement('opc-hello-world')
export class HelloWorld extends LitElement {
  @property() name = 'World';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
