import { axe, toHaveNoViolations } from 'jest-axe';
import { Timeline } from '../src/opc-timeline';

expect.extend(toHaveNoViolations);

describe('opc-timeline', () => {

    const OPC_COMPONENT = 'opc-timeline';
    const ELEMENT_ID = 'opc-timeline';
    let opcTimelineElement: Timeline;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcTimelineElement = window.document.createElement(OPC_COMPONENT) as Timeline;
        document.body.appendChild(opcTimelineElement);
    });

    afterEach(() => {
       document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
    });

    it('is defined', async () => {
        expect(opcTimelineElement).toBeDefined();
    });

    it('has no axe violations', async () => {
        expect(await axe(opcTimelineElement)).toHaveNoViolations()
    });

    it('has default variant attribute defined and set as *default*', async () => {
        expect(opcTimelineElement.variant).toBeDefined();
        expect(opcTimelineElement.variant).toEqual('default');
    });

    it('has default steps attribute defined and set as 0', async ()=> {
        expect(opcTimelineElement.steps).toBeDefined();
        expect(opcTimelineElement.steps.length).toEqual(0);
    });

    it('has default currentStepIndex attribute defined as 0', async() => {
        expect(opcTimelineElement.currentStepIndex).toBeDefined();
        expect(opcTimelineElement.currentStepIndex).toEqual(0);
    });

    it('sets the steps as strings', async () => {
        const mockStrArr = [
            'Scheduled',
            'Running',
            'Stopped'
        ];
        opcTimelineElement.steps = mockStrArr;
        expect(opcTimelineElement.steps.length).toEqual(3);
        expect(opcTimelineElement.steps[0]).toEqual('Scheduled');
    });
});
