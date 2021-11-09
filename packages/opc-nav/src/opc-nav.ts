import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

import { searchIcon, notificationIcon, gridIcon } from './assets';
import opcNavStyle from './opc-nav.scss';
import opcNavSearchStyle from './opc-nav-search.scss';

@customElement('opc-nav')
export class OpcNav extends LitElement {
  static get styles() {
    return [opcNavStyle];
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
        <slot></slot>
        <slot name="opc-nav-search"> </slot>
        <div class="opc-nav-menu-container">
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
          <div class="opc-nav-btn-container">
            <slot name="opc-nav-btn">
              <button
                @click="${() => this._handleButtonClick('notification')}"
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
                @click="${() => this._handleButtonClick('menu')}"
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
      </div>
    </header>`;
  }
}

@customElement('opc-nav-search')
export class OpcNavSearch extends LitElement {
  static get styles() {
    return [opcNavSearchStyle];
  }

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: String, reflect: true })
  placeholder = 'Search application, documents, contents etc';

  @query('input')
  private input!: HTMLInputElement;

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
    return html`
      <div class="opc-nav-search">
        <form
          class="opc-nav-search__form"
          @submit="${this._handleSearchSubmit}"
        >
          <button class="opc-nav-search__btn" type="submit">
            <img
              src="${searchIcon}"
              class="opc-nav__icon"
              alt="user"
              width="20px"
              height="20px"
            />
          </button>
          <input
            class="opc-nav-search__input"
            type="search"
            name="query"
            autofocus
            autocomplete="off"
            aria-label=${this.placeholder}
            placeholder=${this.placeholder}
            required
            .value=${live(this.value)}
            @input="${this._handleInputChange}"
          />
        </form>
      </div>
    `;
  }
}
