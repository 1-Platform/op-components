import {LitElement} from 'lit-element';

describe('opc-header', () => {

    const OPC_HEADER = 'opc-header';

    let opcHeader: LitElement;

    beforeEach(() => {
      opcHeader = window.document.createElement(OPC_HEADER) as LitElement;
      document.body.appendChild(opcHeader);
    });

    afterEach(() => {
      document.querySelector(OPC_HEADER).remove();
    });

    it('should be defined', async () => {
      expect(opcHeader).toBeDefined();
    });

    it('should render header text on setting "heading" attribute', async () => {
      opcHeader.setAttribute('heading', 'OPC Header');
      await opcHeader.updateComplete;
      expect(opcHeader.getAttribute("heading")).toEqual('OPC Header');
    });
});
