import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-footer.scss';

@customElement('opc-footer')
export class OpcFooter extends LitElement {
  @property({ attribute: 'opc-theme' }) theme = 'light';

  @property({ type: Array, attribute: 'opc-links-group' })
  linksGroups = [];

  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <footer class="${this.theme=== 'light' ? 'light' : 'dark'}">
        ${this.linksGroups.map(linkGroup => html`
          <div class="link-group">
            <h4 class="link-group__name">${linkGroup.name}</h4>
            ${linkGroup.links.map(link => html`
              ${link.path
                ? html`<a href="${link.path}"
                  target="_blank"
                  name="${link.name}">${link.name}</a>`
                : html`<a name="${link.name}" tabindex="0"
                  @click="${e => this._handleClick(link)}">${link.name}</a>`}
            `)}
          </div>
        `)}
      </div>

      <div class="footer-note">
        Copyright &copy; ${new Date().getFullYear() }
        <slot name="copyright">All Right Reserved.</slot>
      </div>
      </footer>
    `;
  }

  _handleClick(link) {
    let footerLinkEvent = new CustomEvent('opc-footer-link-click', {
      detail: { message: 'opc-footer link clicked.', data: link },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(footerLinkEvent);
  }
}
