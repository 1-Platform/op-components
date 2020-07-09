import {LitElement} from 'lit-element';

describe('<%= componentName %>', () => {

    const OPC_COMPONENT = '<%= componentName %>';
    const ELEMENT_ID = '<%= componentName %>';
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
        buttonElement.setAttribute('name', '<%= componentName %>');
        await buttonElement.updateComplete;

        const renderedText = getShadowRoot(OPC_COMPONENT).getElementById(ELEMENT_ID).innerText;

        expect(renderedText).toEqual('<%= componentName %>');
    });

    // Add more tests here
});