import {LitElement} from 'lit-element';

describe('opc-timeline', () => {

    const OPC_COMPONENT = 'opc-timeline';
    const ELEMENT_ID = 'opc-timeline';
    let buttonElement: LitElement;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        buttonElement = window.document.createElement(OPC_COMPONENT) as LitElement;
        document.body.appendChild(buttonElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('displays button text', async () => {
        buttonElement.setAttribute('name', 'opc-timeline');
        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(OPC_COMPONENT).getElementById(ELEMENT_ID).innerText;

        expect(renderedText).toEqual('opc-timeline');
    });

    // Add more tests here
});