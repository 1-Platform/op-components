import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcMenuDrawer } from '../src/opc-menu-drawer';

expect.extend(toHaveNoViolations);

describe('opc-menu-drawer', () => {

    const OPC_COMPONENT = 'opc-menu-drawer';
    const ELEMENT_ID = 'opc-menu-drawer';
    let opcElement: OpcMenuDrawer;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as OpcMenuDrawer;
        document.body.appendChild(opcElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
        expect(opcElement).toBeDefined();
    });

    it('has no axe violations', async () => {
        expect(await axe(opcElement)).toHaveNoViolations()
    });

    // Add more tests here
});
