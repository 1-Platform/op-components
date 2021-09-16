import { LitElement, html, property, customElement } from 'lit-element';
import { nothing } from 'lit-html';
import style  from './opc-footer.scss';

@customElement('opc-footer')
export class OPCFooter extends LitElement {
  @property({ attribute: 'theme' }) theme: string = 'light';

  @property({ attribute: 'flat', type: Boolean }) flat: Boolean = false;

  @property({ type: Array, attribute: 'link-categories' })
  _linkCategories: OPCFooterLinkCategory[] | undefined = [];

  static get styles() {
    return [ style ];
  }

  get opcLinkCategories() {
    return this._linkCategories;
  }

  set opcLinkCategories(links) {
    if (!links.length) {
      console.warn(`
        ${ this.tagName.toLowerCase() }:
        opc-footer needs an array of OPCFooterLinkCategory[] type for more information
        read README.md file.`);
    } else {
      this._linkCategories = links;
    }
  }

  render() {
    return html`
      <footer class="${this.theme=== 'light' ? 'light' : 'dark'}
        ${this._linkCategories.length ? `background-image-${this.theme}`: '' }
        ${this.flat ? 'no-bg': nothing}">
        ${this._linkCategories.map(_linkCategory => html`
          <div class="link-category">
            <h4 class="link-category__name">${_linkCategory.category}</h4>
            ${_linkCategory.links.map(_link => html`
              ${_link.href
                ? html`<a href="${_link.href}"
                  target="_blank"
                  name="${_link.text}">${_link.text}</a>`
                : html`<a name="${_link.text}" tabindex="0"
                  @click="${e => this._footerLinkClicked(_link)}">${_link.text}</a>`}
            `)}
          </div>
        `)}
      </div>

      <div class="note">
        Copyright &copy; ${new Date().getFullYear() }
        <slot name="copyright">All Rights Reserved.</slot>
      </div>
      </footer>
    `;
  }

  _footerLinkClicked(link) {
    let footerLinkEvent = new CustomEvent('opc-footer-link:click', {
      detail: {
        message: 'opc-footer-link clicked.',
        data: link
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(footerLinkEvent);
  }

}
