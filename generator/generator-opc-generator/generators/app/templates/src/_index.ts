import { LitElement, html, property, customElement } from 'lit-element';
import style  from './<%= componentName %>.scss';

@customElement('<%= componentName %>')
export class <%= componentClass %> extends LitElement {
  @property() name = '<%= componentName %>';
  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      <h1 id="<%= componentName %>">${this.name}</h1>
    `;
  }
}
