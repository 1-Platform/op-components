import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
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
