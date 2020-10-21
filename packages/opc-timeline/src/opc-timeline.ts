import { LitElement, html, property, customElement, css } from 'lit-element';
import style  from './opc-timeline.scss';

@customElement('opc-timeline')
export class Timeline extends LitElement {
  @property({ type: Array, attribute: 'steps'}) steps = [];
  @property({ type: Number, attribute: 'current-step-index' }) currentStepIndex = 0;
  @property({ type: String, attribute: 'variant'}) variant = 'default';
  static get styles() {
    return [ style ];
  }

  scrollToLeft() {
    this.shadowRoot.querySelector('#timeline-steps').scrollBy({
      left: -900,
      behavior: 'smooth'
    });
  }

  scrollToRight() {
    this.shadowRoot.querySelector('#timeline-steps').scrollBy({
      left: 900,
      behavior: 'smooth'
    });
  }

  getArrow() {
    if (this.variant === 'compact') {
      return {
        left: html`
          <span class="timeline__arrow left" @click="${this.scrollToLeft}">
            <div class="arrow">
            </div>
          </span>`,
          right: html`
          <span class="timeline__arrow right" @click="${this.scrollToRight}">
            <div class="arrow">
            </div>
          </span>
          `,
      }
    } else {
      return {
        left: '',
        right: ''
      }
    }
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
    <style>
      .compact .timeline-steps {
        overflow: hidden;
      }
      .compact .timeline-steps::before {
        width: ${this.steps.length * 180}px !important;
      }
      .compact .timeline-steps .timeline-steps__step {
        flex: 0 0 180px;
      }
    </style>
    <div class="timeline ${this.variant === 'compact' ? 'compact' : ''}">
        ${this.getArrow().left}
        <ul id="timeline-steps" class="timeline-steps">
          ${this.steps.map((step, index) => {
            if (step) {
              return html`
              <li
                class="timeline-steps__step ${this.currentStepIndex === index ? 'active' : ''}"
                @click="${() => {this._eventEmitter(index, step)}}">
                  ${step}
              </li>`;
            } else {
              return html`
                <li 
                  class="timeline-steps__step ${this.currentStepIndex === index ? 'active' : ''}"
                  @click="${() => {this._eventEmitter(index, null)}}">
                </li>`;
            }
          })}
        </ul>
        ${this.getArrow().right}
      </div>
      <div class="timeline-label">
        <slot name="start-label"></slot>
        <slot name="end-label"></slot>
      </div>
    `;
  }
}
