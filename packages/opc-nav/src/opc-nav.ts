import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import { searchIcon, notificationIcon, gridIcon } from './assets';
import style from './opc-nav.scss';

@customElement('opc-nav')
export class OpcNav extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String }) name = 'opc-nav';
  @property({ type: Array, reflect: true }) links: OpcNavMenuLinks[] = [];
  @property({ type: String, reflect: true }) activeButton: Active | null = null;

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
        <slot></slot>
        <slot name="opc-nav-search"> </slot>
        <div class="opc-nav-btn-container">
          <slot name="opc-nav-btn">
            <button
              @click="${(e) => this._handleButtonClick('notification')}"
              ?active=${this.activeButton === 'notification'}
            >
              <img
                src="${notificationIcon}"
                alt="icons"
                width="20px"
                height="20px"
              />
            </button>
            <button
              @click="${(e) => this._handleButtonClick('menu')}"
              ?active=${this.activeButton === 'menu'}
            >
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

@customElement('opc-nav-search')
export class OpcNavSearch extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String, reflect: true })
  value = '';

  @state()
  private _isSearchOpen: boolean = false;

  @query('input')
  private input!: HTMLInputElement;

  private _handleSearchOpen() {
    this._isSearchOpen = true;
    this.input.focus();
  }

  private _handleSearchClose() {
    if (!this.input.value) {
      this.value = '';
      this._isSearchOpen = false;
    }
  }

  private _handleInputChange(e: Event) {
    this.dispatchEvent(
      new CustomEvent('opc-nav-search:change', {
        detail: {
          value: this.input.value,
        },
      })
    );
  }

  private _handleSearchSubmit(e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent('opc-nav-search:submit', {
        detail: {
          value: this.input.value,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const isSearchExpanded = Boolean(this.value) || this._isSearchOpen;

    return html`
      <div class="opc-nav-search">
        <form
          class="opc-nav-search__form"
          @submit="${this._handleSearchSubmit}"
          ?active=${isSearchExpanded}
          @blur="${this._handleSearchClose}"
        >
          ${isSearchExpanded
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
                @click="${this._handleSearchOpen}"
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
            class="opc-nav-search__input ${isSearchExpanded
              ? 'opc-nav-search__input-active'
              : ''}"
            type="search"
            name="query"
            autofocus
            autocomplete="off"
            aria-label="Search"
            placeholder="Search"
            required
            .value=${live(this.value)}
            @blur="${this._handleSearchClose}"
            @input="${this._handleInputChange}"
          />
        </form>
      </div>
    `;
  }
}
