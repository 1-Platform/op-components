import { axe, toHaveNoViolations } from 'jest-axe';
import { <%= componentClass %> } from '../src/<%= componentName %>';

expect.extend(toHaveNoViolations);

describe('<%= componentName %>', () => {

    const OPC_COMPONENT = '<%= componentName %>';
    const ELEMENT_ID = '<%= componentName %>';
    let opcElement: <%= componentClass %>;

    const getShadowRoot = (tagName: string): ShadowRoot => {
        return document.body.getElementsByTagName(tagName)[0].shadowRoot;
    }

    beforeEach(() => {
        opcElement = window.document.createElement(OPC_COMPONENT) as <%= componentClass %>;
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
