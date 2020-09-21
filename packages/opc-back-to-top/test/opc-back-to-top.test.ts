import {LitElement} from 'lit-element';
import { BackToTop } from '../src/opc-back-to-top';

describe('opc-back-to-top', () => {

    const OPC_COMPONENT = 'opc-back-to-top';
    const ELEMENT_ID = 'opc-back-to-top';
    let buttonElement: BackToTop;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        buttonElement = window.document.createElement(OPC_COMPONENT) as BackToTop;
        document.body.appendChild(buttonElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
        expect(buttonElement).toBeDefined();
      });

      it('has revealAt defined', async () => {
        buttonElement.setAttribute('revealAt', '200');
        await buttonElement.updateComplete;
        expect(buttonElement.revealAt).toEqual(200);
      });
});