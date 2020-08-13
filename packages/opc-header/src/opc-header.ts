import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-header.scss';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

@customElement('opc-header')
export class Header extends LitElement {
  @property({ attribute: "title" }) title = "Opc-Header";
  static get styles() {
    return [ style ]
  }
  
  handleSlotchange(e:any) {
    const childNodes = e.target.assignedNodes({flatten: true});
    const hasSlot = e.target.assignedElements().length !== 0;
    e.target.styles = {"color" : "red"};
     let slotClass = hasSlot ? 'with-slot' : 'without-slot';
     document.querySelector('.opc-header')
  }

  render() {
    return html`
    <div class="opc-header"  }>
      <div class="opc-header__top-row">
        <h1 class="opc-header__top-row--header-name"> ${ this.title } </h1>
      </div>
      <div class="opc-header__bottom-row" >
        <div class="opc-header__bottom-row--left">
          <slot name="breadcrumb" @slotchange=${this.handleSlotchange}>
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

