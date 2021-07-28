import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style  from './opc-notification-drawer.scss';

@customElement('opc-notification-drawer')
export class OpcNotificationDrawer extends LitElement {
  @property() name = 'opc-notification-drawer';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <h1 id="opc-notification-drawer">${this.name}</h1>
    `;
  }
}
