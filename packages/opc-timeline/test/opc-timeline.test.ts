import { axe, toHaveNoViolations } from 'jest-axe';
import { Timeline } from '../src/opc-timeline';

expect.extend(toHaveNoViolations);

describe('opc-timeline', () => {

    const OPC_COMPONENT = 'opc-timeline';
    const ELEMENT_ID = 'opc-timeline';
    let opcElement: Timeline;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as Timeline;
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
});
