import { LitElement, html } from 'lit';
import { property, state, query, customElement } from 'lit/decorators.js';
import { live } from 'lit/directives/live';
import { repeat } from 'lit/directives/repeat';

import { angleDownIcon, closeIcon, searchIcon } from './assets';

import style from './opc-menu-drawer.scss';
import opcMenuDrawerSearch from './opc-menu-drawer-search.scss';
import { queryAll } from 'lit-element';

enum CollapsableText {
  isExpanded = 'show less',
  isCollapsed = 'show more',
}

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
  @state() private _searchTermApplication = '';
  @state() private _searchDebounce: NodeJS.Timeout;

  @query('.opc-menu-drawer-menu')
  collapsableMenuContainer: HTMLDivElement | undefined;

  @queryAll('.opc-menu-drawer-link-group')
  collapsableLinkContainer: NodeListOf<HTMLDivElement> | undefined;

  // utility function to change text of collapsable
  private _toggleContainerText(container: HTMLElement, state?: boolean) {
    const collapsableText = container.querySelector(
      '.opc-menu-drawer-links--collapse-text'
    ) as HTMLParagraphElement;
    const isOpen =
      typeof state === 'boolean'
        ? state
        : collapsableText.innerText.toLowerCase() !==
          CollapsableText.isExpanded;
    collapsableText.innerText = isOpen
      ? CollapsableText.isExpanded
      : CollapsableText.isCollapsed;
  }

  // utility function to change height of collapsable
  private _toggleContainerHeight(
    box: HTMLDivElement,
    indicator: Element,
    state?: boolean
  ) {
    const isOpen = typeof state === 'boolean' ? state : box.clientHeight === 0;
    if (isOpen) {
      box.style.height = box.scrollHeight + 'px';
      indicator.setAttribute('inverse', 'true');
    } else {
      box.style.height = '0';
      indicator.removeAttribute('inverse');
    }
  }

  // close all opened toggles
  private _resetAllMenuToggles() {
    const totalCollapsable = this.collapsableLinkContainer.length;
    for (let i = 0; i < totalCollapsable; i++) {
      this._onLinkToggle(i, false);
    }
  }

  // Collapsable function to trigger menu and links
  private _onMenuToggle() {
    const collapsableMenu = this.collapsableMenuContainer.querySelector(
      '.opc-menu-drawer-menu-btn'
    ) as HTMLDivElement;
    const collapseIndicator = this.collapsableMenuContainer.querySelector(
      '.angle-icon'
    );
    this._toggleContainerHeight(collapsableMenu, collapseIndicator);
  }

  private _onLinkToggle(collapseIndex: number, state?: boolean) {
    const collapseBox = this.collapsableLinkContainer[
      collapseIndex
    ].querySelector('.opc-menu-drawer-links-collapse-box') as HTMLDivElement;
    const collapseIndicator = this.collapsableLinkContainer[
      collapseIndex
    ].querySelector('.angle-icon');
    if (collapseBox && collapseIndicator) {
      this._toggleContainerHeight(collapseBox, collapseIndicator, state);
      this._toggleContainerText(
        this.collapsableLinkContainer[collapseIndex],
        state
      );
    }
  }

  // application search controller
  private _onSearchChange(searchTerm: string) {
    clearTimeout(this._searchDebounce);
    this._searchDebounce = setTimeout(() => {
      this._searchTermApplication = searchTerm;
      this._resetAllMenuToggles();
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
            <div>
              <opc-menu-drawer-search
                placeholder=${`Search application via name`}
                @opc-menu-drawer-search:change=${(evt: any) => {
                  this._onSearchChange(evt.detail.value);
                }}
              ></opc-menu-drawer-search>
            </div>
            <div class="opc-menu-drawer__header-body">
              <slot name="header-body"></slot>
            </div>
          </slot>
          ${this.links.map(({ title, links }, linkIndex) => {
            const nonCollapsedLinks = links
              .filter(({ name }) =>
                name.toLowerCase().includes(this._searchTermApplication)
              )
              .slice(0, 5);

            const collapsedLinks = links
              .filter(({ name }) =>
                name.toLowerCase().includes(this._searchTermApplication)
              )
              .slice(5);
            return html`
              <div class="opc-menu-drawer-link-group">
                <div class="opc-menu-drawer-link-title">
                  <p>${title}</p>
                </div>
                ${repeat(
                  nonCollapsedLinks,
                  ({ name }) => name,
                  ({ name, href, isDisabled }) =>
                    html` <a
                      href="${isDisabled ? '#' : href}"
                      aria-disabled="${isDisabled}"
                    >
                      <div class="opc-menu-drawer-link" ?disabled=${isDisabled}>
                        ${name}
                      </div>
                    </a>`
                )}
                <div class="opc-menu-drawer-links-collapse-box">
                  ${repeat(
                    collapsedLinks,
                    ({ name }) => name,
                    ({ name, href, isDisabled }) =>
                      html` <a
                        href="${isDisabled ? '#' : href}"
                        aria-disabled="${isDisabled}"
                      >
                        <div
                          class="opc-menu-drawer-link"
                          ?disabled=${isDisabled}
                        >
                          ${name}
                        </div>
                      </a>`
                  )}
                </div>
                ${collapsedLinks.length > 0
                  ? html` <div
                      class="opc-menu-drawer-links-collapse-button"
                      key="${linkIndex}"
                      @click="${() => this._onLinkToggle(linkIndex)}"
                    >
                      <p class="opc-menu-drawer-links--collapse-text">
                        ${CollapsableText.isCollapsed}
                      </p>
                      <img
                        src="${angleDownIcon}"
                        alt="angle-icon"
                        width="12px"
                        height="8px"
                        class="angle-icon"
                      />
                    </div>`
                  : null}
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
              @click="${this._onMenuToggle}"
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
