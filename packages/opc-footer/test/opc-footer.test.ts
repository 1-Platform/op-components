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
      expect(opcFooterElement.opcLinkCatagories).toBeDefined();
      expect(opcFooterElement.opcLinkCatagories.length).toEqual(0);
    });

    it('has dark theme defined', async () => {
      opcFooterElement.setAttribute('theme', 'dark');
      await opcFooterElement.updateComplete;
      expect(opcFooterElement.theme).toEqual('dark');
    });

    it('has Links Group Defined', async () => {
      const MockLinksGroupData = `[
        {
          "name":"Quick Links",
          "links":[
            { "name":"Down For The Count", "path":"https://fb.com"},
            { "name":"Between a Rock and a Hard Place"},
            { "name":"Keep Your Eyes Peeled"},
            { "name":"Drawing a Blank"}
          ]
        }
      ]`;

      opcFooterElement.setAttribute('link-catagories', MockLinksGroupData);
      await opcFooterElement.updateComplete;
      expect(opcFooterElement.opcLinkCatagories[0].name).toEqual("Quick Links");
      expect(opcFooterElement.opcLinkCatagories[0].links.length).toEqual(4);
    });
});

