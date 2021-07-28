import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcNotificationDrawer } from '../src/opc-notification-drawer';

expect.extend(toHaveNoViolations);

describe('opc-notification-drawer', () => {

    const OPC_COMPONENT = 'opc-notification-drawer';
    const ELEMENT_ID = 'opc-notification-drawer';
    let opcElement: OpcNotificationDrawer;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as OpcNotificationDrawer;
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
