import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcNav, OpcNavSearch } from '../src/opc-nav';

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
});

describe('opc-nav-search', () => {
  const OPC_COMPONENT = 'opc-nav-search';
  const ELEMENT_ID = 'opc-nav-search';
  let opcNavSearch: OpcNavSearch;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcNavSearch = window.document.createElement(OPC_COMPONENT) as OpcNavSearch;
    document.body.appendChild(opcNavSearch);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcNavSearch).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcNavSearch)).toHaveNoViolations();
  });

  it('should change value', async () => {
    expect(opcNavSearch.value).toEqual('');
    opcNavSearch.value = 'search';
    await opcNavSearch.updateComplete;
    expect(opcNavSearch.value).toEqual('search');
  });

  it('should have placeholder value', async () => {
    opcNavSearch.placeholder = 'search';
    await opcNavSearch.updateComplete;
    expect(opcNavSearch.placeholder).toEqual('search');
  });
});
