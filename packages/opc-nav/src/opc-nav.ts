import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { searchIcon, notificationIcon, gridIcon } from './assets';
import style from './opc-nav.scss';

@customElement('opc-nav')
export class OpcNav extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) name = 'opc-nav';
  @property({ type: Array, reflect: true }) links: OpcNavMenuLinks[] = [];
  @property({ type: Boolean, reflect: true }) isSearchHidden: boolean = false;

  @state() _isSearchOpen: boolean = false;

  private _handleToggleSearch() {
    this._isSearchOpen = !this._isSearchOpen;
  }

  private _handleButtonClick(type: 'notification' | 'menu') {
    const name = `opc-nav-btn-${type}:click`;
    this.dispatchEvent(
      new CustomEvent(name, { bubbles: true, composed: true })
    );
  }

  render() {
    return html` <header class="opc-nav">
      <div class="opc-nav-container">
        <div class="opc-nav-logo-container">
          <slot name="opc-nav-logo"></slot>
        </div>
        <nav class="opc-nav-menu">
          <slot name="opc-nav-menu-links">
            <ul>
              ${this.links.map(
                ({ name, href }) =>
                  html` <li><a href="${href}">${name}</a></li> `
              )}
            </ul>
          </slot>
        </nav>
        <div class="flex-grow"></div>
        ${this.isSearchHidden
          ? ''
          : html`
              <slot name="opc-nav-search">
                <div class="opc-nav-search">
                  <form class="opc-nav-search__form" action="/search">
                    ${this._isSearchOpen
                      ? html` <button class="opc-nav-search__btn" type="submit">
                          <img
                            src="${searchIcon}"
                            class="opc-nav__icon"
                            alt="user"
                            width="20px"
                            height="20px"
                          />
                        </button>`
                      : html` <button
                          class="opc-nav-search__btn"
                          type="button"
                          @click="${this._handleToggleSearch}"
                        >
                          <img
                            src="${searchIcon}"
                            class="opc-nav__icon"
                            alt="user"
                            width="20px"
                            height="20px"
                          />
                        </button>`}
                    <input
                      class="opc-nav-search__input ${this._isSearchOpen
                        ? 'opc-nav-search__input-active'
                        : ''}"
                      type="search"
                      name="query"
                      autocomplete="off"
                      aria-label="Search"
                      placeholder="Search"
                      required
                      @blur="${this._handleToggleSearch}"
                    />
                  </form>
                </div>
              </slot>
            `}
        <div class="opc-nav-btn-container">
          <slot name="opc-nav-btn">
            <button @click="${(e) => this._handleButtonClick('notification')}">
              <img
                src="${notificationIcon}"
                alt="icons"
                width="20px"
                height="20px"
              />
            </button>
            <button @click="${(e) => this._handleButtonClick('menu')}">
              <img
                src="${gridIcon}"
                alt="icons"
                width="20px"
                height="20px"
                type="menu"
              />
            </button>
          </slot>
        </div>
      </div>
    </header>`;
  }
}
