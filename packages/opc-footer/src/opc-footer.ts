import { LitElement, html, property, customElement } from 'lit-element';
import style  from './opc-footer.scss';

@customElement('opc-footer')
export class OpcFooter extends LitElement {
  @property() theme = 'light';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <footer class="${this.theme=== 'light' ? 'light' : 'dark'}">
      <div class="footer-link-group">
        <h4 class="link-group__name">Quick links</h4>
        <slot name="quick-link"></slot>
      </div>

      <div class="footer-link-group">
        <h4 class="link-group__name">Related Sites</h4>
        <slot name="related-sites"></slot>
      </div>

      <div class="footer-link-group">
        <h4 class="link-group__name">Help</h4>

        <slot name="help-link"></slot>
      </div>

      <div class="footer-note">
        Copyright © 2020 Red Hat Inc. Internal Use Only
      </div>
      </footer>
    `;
  }
}
