import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-menu-drawer.scss';

@customElement('opc-menu-drawer')
export class OpcMenuDrawer extends LitElement {
  @property() name = 'opc-menu-drawer';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <h1 id="opc-menu-drawer">${this.name}</h1>
    `;
  }
}
