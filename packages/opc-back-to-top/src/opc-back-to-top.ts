import { LitElement, html, property, customElement } from 'lit-element';
import style from './opc-back-to-top.scss';

@customElement('opc-back-to-top')
export class BackToTop extends LitElement {
  @property({ type: Number, attribute: 'reveal-at' }) revealAt = 0;
  @property({ type: Number, reflect: true }) scrolledY = 0;
  constructor() {
    super();
    window.addEventListener("scroll", () => { this.scrolledY = window.scrollY });
  }

  static get styles() {
    return [style];
  }

  get toggleButton() {
    return this.revealAt < this.scrolledY ? 'show' : 'hide';
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return html`
    <slot @click="${this.goToTop}" class="${this.toggleButton}">
      <button class="rh-text" tabindex="0">
        <svg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 512 512'>
          <title>ionicons-v5-a</title>
          <polyline points='112 244 256 100 400 244' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/>
            <line x1='256' y1='120' x2='256' y2='412' style='fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px'/>
        </svg>
          Go to top
      </button>
   </slot>`;
  }
}
