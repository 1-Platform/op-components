import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-timeline.scss';

@customElement('opc-timeline')
export class Timeline extends LitElement {
  @property({ type: Array, attribute: 'steps'}) steps = [];
  @property({ type: Number, attribute: 'current-step-index' }) currentStepIndex = 0;
  @property({ type: String, attribute: 'variant'}) variant = 'default';
  static get styles() {
    return [ style ];
  }

  scrollHandler(direction) {
    this.shadowRoot.querySelector('#timeline-steps').scrollBy({
      left: direction === 'left' ?  -900 : 900,
      behavior: 'smooth'
    });
  }

  getDirectionArrow() {
    if (this.variant === 'compact') {
      return {
        left: html`
          <span class="timeline__arrow left" @click="${() => {this.scrollHandler('left')}}">
            <div class="arrow">
            </div>
          </span>`,
          right: html`
          <span class="timeline__arrow right" @click="${() => this.scrollHandler('right')}">
            <div class="arrow">
            </div>
          </span>`,
      }
    }
    return {
      left: '',
      right: ''
    };
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
    if (this.currentStepIndex < 0) {
      console.warn(`OPC-TIMELINE: The current-step-index attribute is set to ${this.currentStepIndex}, the active state will not be visible`);
    }
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
        ${this.getDirectionArrow().left}
        <ul id="timeline-steps" class="timeline-steps">
          ${this.steps.map((step, index) => {
            if (step) {
              return html`
              <li
                class="timeline-steps__step
                ${this.currentStepIndex === index ? 'active' : ''}"
                @click="${() => {this._eventEmitter(index, step)}}">
                  ${step}
              </li>`;
            } else {
              return html`
                <li 
                  class="timeline-steps__step 
                  ${this.currentStepIndex === index ? 'active' : ''}"
                  @click="${() => {this._eventEmitter(index, null)}}">
                </li>`;
            }
          })}
        </ul>
        ${this.getDirectionArrow().right}
      </div>
      <div class="timeline-label">
        <slot name="start-label"></slot>
        <slot name="end-label"></slot>
      </div>
      <div>
        <slot name="timeline-details"></slot>
      </div>
    `;
  }
}
