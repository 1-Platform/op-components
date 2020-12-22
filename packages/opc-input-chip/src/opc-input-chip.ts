import { LitElement, html, property, customElement } from 'lit-element';
import { nothing } from 'lit-html';
import style  from './opc-input-chip.scss';

@customElement('opc-input-chip')
export class OpcInputChip extends LitElement {

  @property({ attribute: 'chips' }) chips: any[] = [];

  @property() placeholder = 'Enter the chip';

  static get styles() {
    return [ style ];
  }

  getRemoveChipIcon(chip, index) {
    return chip.isRemovable
      ? html`
        <svg viewBox='0 0 512 512' tabindex="0"
          @click="${e => this.removeChip(index)}"
          @keydown="${e => this.handleKeyDownRemove(e, index)}">
          <title>Close</title>
          <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'/>
        </svg>
      `
      : nothing;
  }

  handleKeyDownRemove(e, index) {
    if (e.key === 'Enter') {
      this.removeChip(index);
    }
  }

  removeChip(index) {
    this.chips.splice(index, 1);
    this.requestUpdate('chips');
    this.handleChipEvent('removed');
  }

  addNewChip(e) {
    if (e.key === 'Enter' && e.target.value && e.target.value.trim()) {
      this.chips.push({
        id: this.chips.length + 1,
        name: e.target.value,
        isRemovable: true
      });
      e.target.value = null;
      this.requestUpdate('chips');
      this.handleChipEvent('added');
    }
  }

  handleChipEvent(operation: string) {
    let chipEvent = new CustomEvent(`opc-input-chip:${operation}`, {
      detail: {
        message: `chip is ${operation}`,
        data: {
          chips: this.chips
        }
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(chipEvent);
  }

  render() {
    return html`
      <div class="opc-input-chip" tabindex="0">
        ${this.chips && this.chips.length
          ? this.chips.map((chip, index) =>
              html`
                <div class="opc-chip" title="${chip.name}" tabindex="0">
                  ${chip.name}
                  ${this.getRemoveChipIcon(chip, index)}
                </div>
            `)
          : nothing
        }
        <input class="opc-input" type="text" placeholder="${this.placeholder}"
          aria-label="Enter chip name" @keydown="${ e => this.addNewChip(e)}">
      </div>
    `;
  }
}
