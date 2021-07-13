import { LitElement, html, property, customElement, query } from 'lit-element';
import { state } from 'lit/decorators.js';
import style  from './opc-comment-input.scss';

@customElement('opc-comment-input')
export class CommentInput extends LitElement {
  @property({type: String})
  placeholder = 'Type your comment';

  @state()
  protected commentText = '';

  @query('textarea')
  textarea: HTMLTextAreaElement;

  static get styles() {
    return [ style ];
  }

  _resetCommentInput() {
    this.commentText = '';
    this.textarea.value = '';
  }

  _commentButtonClicked() {
    if (this.commentText.length) {
      let commentSubmitEvent = new CustomEvent('opc-comment-button:click', {
        detail: {
          message: 'opc-comment-submit button is clicked',
          data: {
            commentText: this.commentText,
          }
        }
      });
      this.dispatchEvent(commentSubmitEvent);
      this._resetCommentInput();
    }
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
      <div class="pf-c-form">
        <div class="pf-c-form__group">
          <div class="pf-c-form__group-label">
            <label class="pf-c-form__label" for="vertical-align-labels-form-name">
              <span class="pf-c-form__label-text">Add Comment</span>
            </label>
          </div>
          <div class="pf-c-form__group-control">
            <textarea class="pf-c-form-control"
              type="text"
              aria-label="textarea example"
              placeholder="${ this.placeholder }"
              @input="${(e: HTMLElementEventMap | any) => this.commentText = e.target.value}"></textarea>
          </div>
        </div>
        <div class="pf-c-form__actions pf-l-flex pf-m-justify-content-flex-end">
          <button class="pf-c-button pf-m-secondary" type="reset"
            @click="${this._resetCommentInput}"
            style="--pf-c-button--m-secondary--Color: #000; --pf-c-button--after--BorderColor: transparent;">
            Cancel
          </button>
          <button class="pf-c-button pf-m-primary"
            ?disabled="${!this.commentText.length}"
            @click="${(e: HTMLElementEventMap) => this._commentButtonClicked()}">Comment</button>
        </div>
      </div>
    `;
  }
}

@customElement('opc-comment-list')
export class CommentList extends LitElement {

  @property({type: Array})
  comments: OPCComment[] = [];

  static get styles() {
    return [ style ];
  }

  render() {
    return html`
      ${ !this.comments.length ?
        html`
          <div class="comment-empty-state">
            <p><strong>No comments yet!</strong> Type your comment to start the conversation</p>
          </div>` :
        html`
          ${this.comments.map(i => html`<div class="comment-item">
            <span class="user-avatar"></span>
            <div>
              <p class="user-name">${i.commenter} <small class="comment--time"> at ${i.date}</small></p>
              <p>${i.comment ? i.comment : 'comment not found'}</p>
            </div>
          <div>`)}
        `
      }
    `
  }
}
