import { LitElement, html } from 'lit';
import { property, state, query, customElement } from 'lit/decorators.js';
import { live } from 'lit/directives/live';
import { repeat } from 'lit/directives/repeat';

import { angleDownIcon, closeIcon, searchIcon } from './assets';

import style from './opc-menu-drawer.scss';
import opcMenuDrawerSearch from './opc-menu-drawer-search.scss';

@customElement('opc-menu-drawer')
export class OpcMenuDrawer extends LitElement {
  @property() name = 'opc-menu-drawer';

  static get styles() {
    return [style];
  }

  @property({ type: Array, reflect: true })
  links: OpcMenuDrawerLinkGroup[] = [];
  @property({ type: String, reflect: true }) title = 'Menu';
  @property({ type: String, reflect: true }) menuTitle = '';

  @state() private _isOpen = false;
  @state() private _searchLinkState: Record<string, string> = {};
  @state() private _searchDebounce: NodeJS.Timeout;

  @query('.opc-menu-drawer-menu')
  collapsableMenuContainer: HTMLDivElement | undefined;

  private _handleLinkExpandToggle(event: Event) {
    const container = (event.target as HTMLDivElement).parentElement!;
    const collapseBox = container.querySelector(
      '.opc-menu-drawer-links-collapse-box'
    )! as HTMLDivElement;
    const collapseIndicator = container.querySelector('.angle-icon')!;
    this._toggleContainerHeight(collapseBox, collapseIndicator);
  }

  private _handleMenuExpandToggle() {
    const collapsableMenu = this.collapsableMenuContainer.querySelector(
      '.opc-menu-drawer-menu-btn'
    ) as HTMLDivElement;
    const collapseIndicator = this.collapsableMenuContainer.querySelector(
      '.angle-icon'
    );
    this._toggleContainerHeight(collapsableMenu, collapseIndicator);
  }

  private _toggleContainerHeight(box: HTMLDivElement, indicator: Element) {
    if (box.clientHeight === 0) {
      box.style.height = box.scrollHeight + 'px';
      indicator.setAttribute('inverse', 'true');
    } else {
      box.style.height = '0';
      indicator.removeAttribute('inverse');
    }
  }

  private _handleSearchChange(type: string, search: string) {
    clearTimeout(this._searchDebounce);
    this._searchDebounce = setTimeout(() => {
      this._searchLinkState = {
        ...this._searchLinkState,
        [type]: search.toLowerCase(),
      };
    }, 300);
  }

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
        new CustomEvent(`opc-menu-drawer:${this.isOpen ? 'open' : 'close'}`, {
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  disconnectedCallback() {
    clearTimeout(this._searchDebounce);
  }

  render() {
    return html`
      <div class="opc-menu-drawer-container" ?isHidden="${!this.isOpen}">
        <div class="opc-menu-drawer-backdrop" @click="${this.close}"></div>
        <dialog
          ?open=${this._isOpen}
          id="opc-menu-drawer"
          class="opc-menu-drawer"
          role="dialog"
          aria-modal="true"
        >
          <slot name="header">
            <div class="opc-menu-drawer__header">
              <div>
                <h4 class="opc-menu-drawer__header-title">${this.title}</h4>
              </div>
              <div>
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
            </div>
            <div class="opc-menu-drawer__header-body">
              <slot name="header-body"></slot>
            </div>
          </slot>
          ${this.links.map(({ title, links, isSearchable }, index) => {
            const normalizedTitle = title.toLowerCase();

            return html`
              <div class="opc-menu-drawer-link-group">
                <div class="opc-menu-drawer-link-title">
                  <p>${title}</p>
                </div>
                ${isSearchable
                  ? html`<opc-menu-drawer-search
                      placeholder=${`Search ${normalizedTitle} via name`}
                      @opc-menu-drawer-search:change=${(evt: any) => {
                        this._handleSearchChange(
                          normalizedTitle,
                          evt.detail.value
                        );
                      }}
                    ></opc-menu-drawer-search>`
                  : null}
                ${Boolean(this._searchLinkState[normalizedTitle])
                  ? html`
                      ${repeat(
                        links.filter(({ name }) =>
                          name
                            .toLowerCase()
                            .includes(this._searchLinkState[normalizedTitle])
                        ),
                        ({ name }) => name,
                        ({ name, href }) =>
                          html` <a href="${href}">
                            <div class="opc-menu-drawer-link">${name}</div>
                          </a>`
                      )}
                    `
                  : html`${repeat(
                        links.slice(0, 5),
                        ({ name }) => name,
                        ({ name, href }) =>
                          html` <a href="${href}">
                            <div class="opc-menu-drawer-link">${name}</div>
                          </a>`
                      )}
                      <div class="opc-menu-drawer-links-collapse-box">
                        ${repeat(
                          links.slice(5),
                          ({ name }) => name,
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
                              @click="${this._handleLinkExpandToggle}"
                            >
                              <p>Show more</p>
                              <img
                                src="${angleDownIcon}"
                                alt="angle-icon"
                                width="12px"
                                height="8px"
                                class="angle-icon"
                              />
                            </div>
                          `
                        : null}`}
                <hr />
              </div>
            `;
          })}
          <div class="opc-menu-drawer-body">
            <slot></slot>
          </div>
          <div class="flex-grow"></div>
          <slot name="footer"></slot>
          <div class="opc-menu-drawer-menu">
            <hr class="opc-menu-drawer__menu-header-sep" />
            <div
              class="opc-menu-drawer__menu-header"
              @click="${this._handleMenuExpandToggle}"
            >
              <div>
                <h4 class="opc-menu-drawer__menu-header-title">
                  ${this.menuTitle}
                </h4>
              </div>
              <img
                src="${angleDownIcon}"
                alt="angle-icon"
                class="angle-icon"
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
          </div>
        </dialog>
      </div>
    `;
  }
}

@customElement('opc-menu-drawer-search')
export class OpcMenuDrawerSearch extends LitElement {
  static get styles() {
    return [opcMenuDrawerSearch];
  }

  @property({ type: String, reflect: true })
  value = '';

  @property({ type: String, reflect: true })
  placeholder = 'Search';

  @query('input')
  private input!: HTMLInputElement;

  private _handleInputChange(e: Event) {
    this.dispatchEvent(
      new CustomEvent('opc-menu-drawer-search:change', {
        detail: {
          value: this.input.value,
        },
      })
    );
  }

  render() {
    return html`
      <div class="opc-menu-drawer-search">
        <div class="opc-menu-drawer-search__item">
          <img
            src="${searchIcon}"
            class="opc-menu-drawer-search__icon"
            alt="user"
            width="12px"
            height="12px"
          />
        </div>
        <div class="flex-grow opc-menu-drawer-search__item">
          <input
            class="opc-menu-drawer-search__input"
            type="search"
            name="seach"
            aria-label=${this.placeholder}
            placeholder=${this.placeholder}
            .value=${live(this.value)}
            @input="${this._handleInputChange}"
          />
        </div>
      </div>
    `;
  }
}
