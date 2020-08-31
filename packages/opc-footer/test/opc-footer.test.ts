import {LitElement} from 'lit-element';
import { OpcFooter } from '../src/opc-footer';

describe('opc-footer', () => {

    const OPC_COMPONENT = 'opc-footer';
    const ELEMENT_ID = 'opc-footer';
    let opcFooterElement: OpcFooter;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcFooterElement = window.document.createElement(OPC_COMPONENT) as OpcFooter;
        document.body.appendChild(opcFooterElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
      expect(opcFooterElement).toBeDefined();
    });

    it('has Default theme defined', async () => {
      expect(opcFooterElement.theme).toBeDefined();
      expect(opcFooterElement.theme).toEqual('light');
    });

    it('has Default link groups', async () => {
      expect(opcFooterElement.linksGroups).toBeDefined();
      expect(opcFooterElement.linksGroups.length).toEqual(0);
    });

    it('has dark theme defined', async () => {
      opcFooterElement.setAttribute('opc-theme', 'dark');
      await opcFooterElement.updateComplete;
      expect(opcFooterElement.theme).toEqual('dark');
    });
});
