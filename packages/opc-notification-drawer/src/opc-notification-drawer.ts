import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { closeIcon } from './assets';
import style from './opc-notification-drawer.scss';

@customElement('opc-notification-drawer')
export class OpcNotificationDrawer extends LitElement {
  @property() name = 'opc-notification-drawer';
  static get styles() {
    return [style];
  }

  @state() private _isOpen = false;
  @property({ type: String, reflect: true }) title = 'Notifications';

  close() {
    this._isOpen = false;
  }

  open() {
    this._isOpen = true;
  }

  toggle() {
    this._isOpen = !this._isOpen;
  }

  get isOpen() {
    return this._isOpen;
  }

  updated(changedProperties: any) {
    if (changedProperties.has('_isOpen')) {
      this.dispatchEvent(
        new CustomEvent(
          `opc-notification-drawer:${this.isOpen ? 'open' : 'close'}`,
          {
            bubbles: true,
            composed: true,
          }
        )
      );
    }
  }

  render() {
    return html`
      <div
        class="opc-notification-drawer-container"
        ?isHidden="${!this._isOpen}"
      >
        <div
          class="opc-notification-drawer-backdrop"
          @click="${this.close}"
        ></div>
        <dialog
          ?open=${this.isOpen}
          id="opc-notification-drawer"
          class="opc-notification-drawer"
          role="dialog"
          aria-modal="true"
        >
          <slot name="header">
            <div class="opc-notification-drawer__header-container">
              <div class="opc-notification-drawer__header">
                <div>
                  <h4 class="opc-notification-drawer__header-title">
                    ${this.title}
                  </h4>
                </div>
                <button @click=${this.close}>
                  <img
                    src="${closeIcon}"
                    alt="angle-icon"
                    class="angle-icon"
                    width="12px"
                    height="12px"
                  />
                </button>
              </div>
              <div>
                <slot name="header-body"></slot>
              </div>
            </div>
          </slot>
          <div class="opc-notification-drawer__body">
            <slot></slot>
          </div>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </dialog>
      </div>
    `;
  }
}

@customElement('opc-notification-item')
export class OpcNotificationItem extends LitElement {
  @property() name = 'opc-notification-item';
  static get styles() {
    return [style];
  }

  @property({ type: String, reflect: true }) title = '';
  @property({ type: String, reflect: true }) variant: Variants = 'info';
  @property({ type: String, reflect: true }) key: string | undefined;

  private _handleButtonClick() {
    const name = `opc-notification-item:close`;
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail: {
          key: this.key,
          title: this.title,
        },
      })
    );
  }

  render() {
    return html`
      <div class="opc-notification-item" variant=${this.variant}>
        <slot name="header">
          <div class="opc-notification-item__header" variant=${this.variant}>
            <div class="opc-notification-item__header-title">${this.title}</div>
            <div>
              <slot name="header-actions">
                <button
                  aria-label="close button"
                  @click=${this._handleButtonClick}
                >
                  <img
                    src=${closeIcon}
                    alt="close"
                    width="10px"
                    height="10px"
                    class="opc-notification-item__header-close"
                  />
                </button>
              </slot>
            </div>
          </div>
        </slot>
        <div class="opc-notification-item__body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
