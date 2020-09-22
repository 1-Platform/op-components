import { CommentInput } from '../src/opc-comment-input';

describe('opc-comment-input', () => {

  const OPC_COMPONENT = 'opc-comment-input';
  const ELEMENT_ID = 'opc-comment-input';
  let opcCommentInput: CommentInput;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  }

  beforeEach(() => {
    opcCommentInput = window.document.createElement(OPC_COMPONENT) as CommentInput;
    document.body.appendChild(opcCommentInput);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcCommentInput).toBeDefined()
  });

  it('has the comment button is disabled', async () => {
    const shadowRoot = getShadowRoot('opc-comment-input');
    const submitButton: HTMLButtonElement = shadowRoot.querySelector('button.pf-m-primary');
    expect(submitButton.disabled).toBeDefined();
  })

  it('has the textarea value empty', async () => {
    const shadowRoot = getShadowRoot('opc-comment-input');
    const textareaEl: HTMLTextAreaElement = shadowRoot.querySelector('textarea');
    expect(textareaEl.value).toBeFalsy()
  })

  it('can set the textarea value', async () => {
    const shadowRoot = getShadowRoot('opc-comment-input');
    const textareaEl: HTMLTextAreaElement = shadowRoot.querySelector('textarea');
    textareaEl.value = 'Lorem ipsum Demo test';
    await opcCommentInput.updateComplete;
    expect(textareaEl.value).toEqual('Lorem ipsum Demo test');
  })

  it('can set the textarea placeholder', async () => {
    opcCommentInput.placeholder = 'Add you comment here.'
    await opcCommentInput.updateComplete;
    const shadowRoot = getShadowRoot('opc-comment-input');
    const textareaEl: HTMLTextAreaElement = shadowRoot.querySelector('textarea');
    expect(textareaEl.placeholder).toEqual('Add you comment here.');
    expect(opcCommentInput.placeholder).toEqual('Add you comment here.');
  })
});
