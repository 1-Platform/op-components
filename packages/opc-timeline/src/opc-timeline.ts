import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-timeline.scss';

@customElement('opc-timeline')
export class Timeline extends LitElement {
  @property({ type: Array, attribute: 'steps'}) steps = [];
  @property({ type: Number, attribute: 'current-step-index' }) currentStepIndex = 0;
  static get styles() {
    return [ style ];
  }

  _eventEmitter(stepIndex: number, stepItem: string|null) {
    this.dispatchEvent(
      new CustomEvent('opc-timeline-step:click', {
        detail: {
          message: 'opc-timeline-step clicked',
          data: {
            index: stepIndex,
            item: stepItem,
          },
          bubbles: true,
          composed: true,
        }
      })
    );
  }

  render() {
    return html`
      <ul class="timeline">
        ${this.steps.map((step, index) => {
          if (step) {
            return html`
            <li 
              class="timeline__step ${this.currentStepIndex === index ? 'active' : ''}"
              @click="${() => {this._eventEmitter(index, step)}}">
                ${step}
            </li>`;
          } else {
            return html`
              <li 
                class="timeline__step ${this.currentStepIndex === index ? 'active' : ''}"
                @click="${() => {this._eventEmitter(index, null)}}">
                </li>`;
          }
        })}
      </ul>
      <div class="timeline-label">
        <slot name="start-label"></slot>
        <slot name="end-label"></slot>
      </div>
    `;
  }
}
