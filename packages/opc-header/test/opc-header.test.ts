import {LitElement} from 'lit-element';

describe('opc-header', () => {

    const OPC_COMPONENT = 'opc-header';
    let headerElement: LitElement;

    beforeEach(() => {
        headerElement = window.document.createElement(OPC_COMPONENT) as LitElement;
        document.body.appendChild(headerElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('test header name', async () => {
        headerElement.setAttribute('name', 'opc-header');
        await headerElement.updateComplete;

        const renderedText = document.body.getElementsByTagName(OPC_COMPONENT)[0].getAttribute('name');

        expect(renderedText).toEqual('opc-header');
    });

});