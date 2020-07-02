// @ts-nocheck
import { LitElement, html } from "lit-element";
import style  from './styles/style.scss';

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
    num: {type: Number },
    myProp: { attribute: 'my-prop' }
  };

  static get styles() {
    return [ style ];
  }

  constructor() {
    super();
    this.count = 0;
    this.num = 0;
  }

  inc() {
    this.count++;
    this.lateNumAssignment();
  }

  lateNumAssignment() {
    setTimeout(() => {
      this.num = this.count;
    }, 1000);
  }

  dec() {
    this.count--;
    this.lateNumAssignment();
  }

  render() {
    return html`
      <style include="my-custom-style">
      </style>
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
      <br>
      <div class="info"><span class="info__text">${this.myProp}</span>: ${this.num}</div>
    `;
  }
}

customElements.define("op-dummy", MyCounter);
