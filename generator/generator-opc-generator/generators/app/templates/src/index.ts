import { LitElement, html, property, customElement } from 'lit-element';
import style  from './<%= componentName %>.scss';

@customElement('<%= componentName %>')
export class <%= componentClass %> extends LitElement {
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
