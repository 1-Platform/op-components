import {LitElement} from 'lit-element';
import { OPCFooter } from '../src/opc-footer';

describe('opc-footer', () => {

    const OPC_COMPONENT = 'opc-footer';
    const ELEMENT_ID = 'opc-footer';
    let opcFooterElement: OPCFooter;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcFooterElement = window.document.createElement(OPC_COMPONENT) as OPCFooter;
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
      expect(opcFooterElement.opcLinkCategories).toBeDefined();
      expect(opcFooterElement.opcLinkCategories.length).toEqual(0);
    });

    it('has dark theme defined', async () => {
      opcFooterElement.setAttribute('theme', 'dark');
      await opcFooterElement.updateComplete;
      expect(opcFooterElement.theme).toEqual('dark');
    });

    it('has Links Group Defined', async () => {
      const MockLinksGroupData = [
        { "category":"Quick Links",
          "links":[
            { "text":"Down For The Count", "href":"https://fb.com"},
            { "text":"Between a Rock and a Hard Place"},
            { "text":"Keep Your Eyes Peeled"},
            { "text":"Drawing a Blank"}
          ]
        }
      ];

      opcFooterElement.opcLinkCategories = MockLinksGroupData;
      await opcFooterElement.updateComplete;
      expect(opcFooterElement.opcLinkCategories[0].category).toEqual("Quick Links");
      expect(opcFooterElement.opcLinkCategories[0].links.length).toEqual(4);
    });
});

