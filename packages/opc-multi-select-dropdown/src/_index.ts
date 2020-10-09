import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-multi-select-dropdown.scss';

@customElement('opc-multi-select-dropdown')
export class MultiSelectDropdown extends LitElement {
  @property() name = 'opc-multi-select-dropdown';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <h1 id="opc-multi-select-dropdown">${this.name}</h1>
    `;
  }
}
