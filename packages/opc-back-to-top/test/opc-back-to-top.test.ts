import { LitElement } from 'lit-element';
import { BackToTop } from '../src/opc-back-to-top';

describe('opc-back-to-top', () => {

  const OPC_COMPONENT = 'opc-back-to-top';
  const ELEMENT_ID = 'opc-back-to-top';
  let buttonElement: BackToTop;

  beforeEach(() => {
    buttonElement = window.document.createElement(OPC_COMPONENT) as BackToTop;
    document.body.appendChild(buttonElement);
  });

  afterEach(() => {
    document.querySelector(OPC_COMPONENT).remove();
  });

  it('is defined', async () => {
    expect(buttonElement).toBeDefined();
  });

  it('has reveal-at defined', async () => {
    buttonElement.setAttribute('reveal-at', '200');
    await buttonElement.updateComplete;
    expect(buttonElement.revealAt).toEqual(200);
  });

  it('has reveal-at defined', async () => {
    buttonElement.setAttribute('reveal-at', '300');
    await buttonElement.updateComplete;
    expect(buttonElement.revealAt).toEqual(300);
  });

});
