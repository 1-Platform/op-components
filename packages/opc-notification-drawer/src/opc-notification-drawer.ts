import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { closeIcon } from './assets';
import style from './opc-notification-drawer.scss';

@customElement('opc-notification-drawer')
export class OpcNotificationDrawer extends LitElement {
  @property() name = 'opc-notification-drawer';
  static get styles() {
    return [style];
  }

  @property({ type: Boolean, reflect: true }) isOpen = false;
  @property({ type: String, reflect: true }) title = 'notifications';

  private _handleDrawerClose() {
    this.isOpen = false;
  }

  render() {
    return html`
      <div
        class="opc-notification-drawer-container"
        ?isHidden="${!this.isOpen}"
      >
        <div
          class="opc-notification-drawer-backdrop"
          @click="${this._handleDrawerClose}"
        ></div>
        <dialog
          ?open=${this.isOpen}
          id="opc-notification-drawer"
          class="opc-notification-drawer"
          role="dialog"
          aria-modal="true"
        >
          <slot name="header">
            <div class="opc-notification-drawer__header">
              <div>
                <h6 class="opc-notification-drawer__header-title">
                  ${this.title}
                </h6>
              </div>
              <div class="flex-grow"></div>
              <div>
                <slot name="header-menu"></slot>
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
                  @click=${(e) => this._handleButtonClick()}
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
