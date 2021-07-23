import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcNav } from '../src/opc-nav';

expect.extend(toHaveNoViolations);

describe('opc-nav', () => {
  const OPC_COMPONENT = 'opc-nav';
  const ELEMENT_ID = 'opc-nav';
  let opcNav: OpcNav;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcNav = window.document.createElement(OPC_COMPONENT) as OpcNav;
    document.body.appendChild(opcNav);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcNav).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcNav)).toHaveNoViolations();
  });

  it('should render nav menu links on attribute links', async () => {
    opcNav.links = [{ name: 'Blog', href: '#' }];
    await opcNav.updateComplete;
    expect(opcNav.links.length).toEqual(1);
    expect(opcNav.links[0].name).toEqual('Blog');
    expect(opcNav.links[0].href).toEqual('#');
  });

  it('should make search hidden', async () => {
    expect(opcNav.isSearchHidden).toBeFalsy();
    opcNav.isSearchHidden = true;
    await opcNav.updateComplete;
    expect(opcNav.isSearchHidden).toBeTruthy();
  });
});
