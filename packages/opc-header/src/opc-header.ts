import { LitElement, html, property, customElement } from 'lit-element';
import style from './opc-header.scss';

@customElement('opc-header')
class OPCHeader extends LitElement {

  // Property Declarations
  @property({ reflect: true })
  heading
  version
  sponsor

  @property({ reflect: true })
  theme

  constructor() {
    super();
    this.theme = "default";
  }

  static get styles() {
    return [ style ]
  }

  render() {
    return html`
      <div class="opc-header">
        <div class="opc-header__top-row">
          <h1 class="opc-header__top-row--header-name"> ${ this.heading } </h1>
        </div>
        <div class="opc-header__bottom-row">
          <slot name="breadcrumb">
          </slot>
          <slot name="links">
          </slot>
        </div>
      </div>
    `;
  }
}

@customElement('opc-header-breadcrumb')
class OPCHeaderBreadcrumb extends LitElement {

  // Property Declarations
  @property({ type: Array })
  _breadcrumb

  constructor() {
    super();
    this._breadcrumb;
  }

  static get styles() {
    return [ style ]
  }

  get opcHeaderBreadcrumb() {
    return this._breadcrumb;
  }

  set opcHeaderBreadcrumb(breadcrumb) {
    this._breadcrumb = breadcrumb;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
      <nav class="pf-c-breadcrumb" aria-label="breadcrumb">
        <ol class="pf-c-breadcrumb__list">
          ${this.opcHeaderBreadcrumb.map(breadcrumb =>
            html`<li class="pf-c-breadcrumb__item">
                  <span class="pf-c-breadcrumb__item-divider">
                    <i class="fas fa-angle-right" aria-hidden="true"></i>
                  </span>
                  <a href="${breadcrumb.href}" class="pf-c-breadcrumb__link">${breadcrumb.name}</a>
                </li>`)}
        </ol>
      </nav>
    `;
  }
}

@customElement('opc-header-links')
class OPCHeaderLinks extends LitElement {

  // Property Declarations
  @property({ type: Array })
  _links

  constructor() {
    super()
  }

  static get styles() {
    return [ style ]
  }

  get opcHeaderLinks() {
    return this._links;
  }

  set opcHeaderLinks(links) {
    this._links = links;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
      ${this.opcHeaderLinks.map(link =>
        html`
            <a class="pf-c-button pf-m-link" href="${link.href}">
              <span class="pf-c-button__icon pf-m-start">
                <i class="fas ${link.icon}" aria-hidden="true"></i>
              </span>${link.name}
            </a>`)}
    `;
  }
}

export { OPCHeader as default }
