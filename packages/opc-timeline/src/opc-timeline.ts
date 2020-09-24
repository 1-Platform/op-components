import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-timeline.scss';

@customElement('opc-timeline')
export class Timeline extends LitElement {
  @property({ type: Array, attribute: 'steps'}) steps = [];
  @property({ type: Number, attribute: 'current-step-index' }) currentStepIndex = 0;
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <ul class="timeline">
        ${this.steps.map((step, index) => {
          if (step) {
            return html`
            <li class="timeline__step ${this.currentStepIndex === index ? 'active' : ''}">
              ${step}
            </li>`;
          } else {
            return html`<li class="timeline__step ${this.currentStepIndex === index ? 'active' : ''}"></li>`;
          }
        })}
      </ul>
      <slot name="timeline-label"></slot>
    `;
  }
}
