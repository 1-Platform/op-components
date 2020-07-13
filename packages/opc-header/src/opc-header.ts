import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-header.scss';

@customElement('opc-header')
export class Header extends LitElement {
  @property({ attribute: "header-name" }) headerName = "Opc-Header";
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
    <div class="app-header">
      <div class="app-header__top-row">
        <h1 class="app-header__top-row--header-name"> ${ this.headerName } </h1>
      </div>
      <div class="app-header__bottom-row">
      <div class="app-header__bottom-row--left">
          <slot name="breadcrumb-slot">
          </slot>
        </div>
        <div class="app-header__bottom-row--spacer"> </div>
        <div class="app-header__bottom-row--right app-header__spacer--rh-text">
          <slot name="right-link-slot">
          </slot>
        </div>
      </div>
  </div>
    `;
  }
}

