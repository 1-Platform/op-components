import { LitElement, html, property, customElement, query } from 'lit-element';
import style  from './opc-footer.scss';

@customElement('opc-footer')
export class OpcFooter extends LitElement {
  @property({ attribute: 'theme' }) theme: string = 'light';

  @property({ type: Array, attribute: 'link-catagories' })
  _linkCatagories: OpcFooterLinkCategory[] | undefined = [];

  static get styles() {
    return [ style ];
  }

  get opcLinkCatagories() {
    return this._linkCatagories;
  }

  set opcLinkCatagories(links) {
    if (!links.length) {
      console.warn(`
        ${ this.tagName.toLowerCase() }:
        opc-footer needs an array of OpcFooterLinkCategory[] type for more information
        read README.md file.`);
    } else {
      this._linkCatagories = links;
    }
  }

  render() {
    return html`
      <footer class="${this.theme=== 'light' ? 'light' : 'dark'}
        ${this._linkCatagories.length ? `background-image-${this.theme}`: '' }">
        ${this._linkCatagories.map(_linkCategory => html`
          <div class="link-category">
            <h4 class="link-category__name">${_linkCategory.name}</h4>
            ${_linkCategory.links.map(_link => html`
              ${_link.path
                ? html`<a href="${_link.path}"
                  target="_blank"
                  name="${_link.name}">${_link.name}</a>`
                : html`<a name="${_link.name}" tabindex="0"
                  @click="${e => this._handleClick(_link)}">${_link.name}</a>`}
            `)}
          </div>
        `)}
      </div>

      <div class="footer-note">
        Copyright &copy; ${new Date().getFullYear() }
        <slot name="copyright">All Rights Reserved.</slot>
      </div>
      </footer>
    `;
  }

  _handleClick(link) {
    let footerLinkEvent = new CustomEvent('opc-footer-link-click', {
      detail: {
        message: 'opc-footer link clicked.',
        data: link
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(footerLinkEvent);
  }

}
