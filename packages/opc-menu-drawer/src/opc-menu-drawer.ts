import { LitElement, html } from "lit";
import { property, state, queryAll, customElement } from "lit/decorators.js";

import { angleDownIcon } from "./assets";

import style from "./opc-menu-drawer.scss";

@customElement("opc-menu-drawer")
export class OpcMenuDrawer extends LitElement {
  @property() name = "opc-menu-drawer";

  static get styles() {
    return [style];
  }

  @property({ type: Array, reflect: true })
  links: OpcMenuDrawerLinkGroup[] = [];
  @property({ type: String, reflect: true }) headerTitle = "";
  @property({ type: Boolean, reflect: true }) isOpen = false;

  /**
   * This is to monitor all states of collapsed boxes
   * Why, when client height can be used?
   * Because it doesn't sync at first, the request update is fired before client height changes
   * So to avoid unsynced collapse state.
   */
  @state() collapsableState: boolean[] = [];

  @queryAll(".opc-menu-drawer-menu-btn,.opc-menu-drawer-links-collapse-box")
  collapsableLinks: NodeListOf<HTMLDivElement> | undefined;

  private _handleExpandToggle(pos: number) {
    const toggleRef = this.collapsableLinks[pos]!;
    this.collapsableState[pos] = !this.collapsableState[pos];

    if (toggleRef.clientHeight === 0) {
      toggleRef.style.height = toggleRef.scrollHeight + "px";
    } else {
      toggleRef.style.height = "0";
    }

    this.requestUpdate();
  }

  private _handleDrawerClose() {
    this.isOpen = false;
  }

  updated(changedProperties: any) {
    if (changedProperties.has("links")) {
      this.collapsableState = new Array(this.links.length + 1).fill(false);
    }
  }

  render() {
    return html`
      <div class="opc-menu-drawer-container" ?isHidden="${!this.isOpen}">
        <div
          class="opc-menu-drawer-backdrop"
          @click="${this._handleDrawerClose}"
        ></div>
        <dialog
          ?open=${this.isOpen}
          id="opc-menu-drawer"
          class="opc-menu-drawer"
          role="dialog"
          aria-modal="true"
        >
          <div class="opc-menu-drawer-menu">
            <slot name="header">
              <div
                class="opc-menu-drawer__header"
                @click="${() => this._handleExpandToggle(0)}"
              >
                <div>
                  <h4 class="opc-menu-drawer__header-title">
                    ${this.headerTitle}
                  </h4>
                </div>
                <img
                  src="${angleDownIcon}"
                  alt="angle-icon"
                  ?inverse="${this.collapsableState[0]}"
                  width="10px"
                  height="8px"
                />
                <div class="flex-grow"></div>
                <div>
                  <slot name="avatar"></slot>
                </div>
              </div>
              <div class="opc-menu-drawer-menu-btn">
                <slot name="menu"></slot>
              </div>
            </slot>
            <hr />
          </div>
          ${this.links.map(({ title, links }, index) => {
            return html`
              <div class="opc-menu-drawer-link-group">
                <div class="opc-menu-drawer-link-title">
                  <p>${title}</p>
                </div>
                ${links.slice(0, 5).map(
                  ({ name, href }) =>
                    html` <a href="${href}">
                      <div class="opc-menu-drawer-link">${name}</div>
                    </a>`
                )}
                <div class="opc-menu-drawer-links-collapse-box">
                  ${links.slice(5).map(
                    ({ name, href }) =>
                      html` <a href="${href}">
                        <div class="opc-menu-drawer-link">${name}</div>
                      </a>`
                  )}
                </div>
                ${links.length > 5
                  ? html`
                      <div
                        class="opc-menu-drawer-links-collapse-button"
                        key="${index}"
                        @click="${() => this._handleExpandToggle(index + 1)}"
                      >
                        <p>Show more</p>
                        <img
                          src="${angleDownIcon}"
                          alt="angle-icon"
                          width="12px"
                          height="8px"
                          class="angle-icon"
                          ?inverse="${this.collapsableState[index + 1]}"
                        />
                      </div>
                    `
                  : null}
                <hr />
              </div>
            `;
          })}
          <div class="opc-menu-drawer-body">
            <slot></slot>
          </div>
          <div class="flex-grow"></div>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </dialog>
      </div>
    `;
  }
}
