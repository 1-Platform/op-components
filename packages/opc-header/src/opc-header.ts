import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-header.scss';

@customElement('opc-header')
export class Header extends LitElement {
  @property({ attribute: "title" }) title = "Opc-Header";
  static get styles() {
    return [ style ]
  }

  render() {
    return html`
    <div class="opc-header">
      <div class="opc-header__top-row">
        <h1 class="opc-header__top-row--header-name"> ${ this.title } </h1>
      </div>
      <div class="opc-header__bottom-row">
      <div class="opc-header__bottom-row--left">
          <slot name="breadcrumb">
          </slot>
        </div>
        <div class="opc-header__bottom-row--spacer"> </div>
        <div class="opc-header__bottom-row--right opc-header__spacer--rh-text">
          <slot name="jumplinks">
          </slot>
        </div>
      </div>
  </div>
    `;
  }
}

