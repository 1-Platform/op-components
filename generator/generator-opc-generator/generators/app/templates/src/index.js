// @ts-nocheck
import { LitElement, html, css } from "lit-element";

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number }
  };

  static styles = css`
  * {
    font-size: 200%;
  }

  span {
    width: 4rem;
    display: inline-block;
    text-align: center;
  }

  button {
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    background-color: #BE0000;
    color: white;
  }
`;

  constructor() {
    super();
    this.count = 0;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }
}

customElements.define("<%= elementName %>", MyCounter);
