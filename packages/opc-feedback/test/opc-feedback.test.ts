import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcFeedback } from '../src/opc-feedback';

expect.extend(toHaveNoViolations);

describe('opc-feedback', () => {

  const OPC_COMPONENT = 'opc-feedback';
  const ELEMENT_ID = 'opc-feedback';
  let opcFeedbackPanelElement: OpcFeedback;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  }

  beforeEach(() => {
    opcFeedbackPanelElement = window.document.createElement(OPC_COMPONENT) as OpcFeedback;
    document.body.appendChild(opcFeedbackPanelElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcFeedbackPanelElement).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcFeedbackPanelElement)).toHaveNoViolations()
  });

  // Add more tests here
  it('does have default url by default', async () => {
    expect(opcFeedbackPanelElement.url).toEqual('/feedback');
  });

  it('can initiate url for spa', async () => {
    opcFeedbackPanelElement.url = 'https://example.com';
    await opcFeedbackPanelElement.updateComplete;
    expect(opcFeedbackPanelElement.url).toEqual('https://example.com');
  });

  it('feedback modal is closed by default', async () => {
    expect(opcFeedbackPanelElement._openFeedbackModal).toBeFalsy;
  });
});
