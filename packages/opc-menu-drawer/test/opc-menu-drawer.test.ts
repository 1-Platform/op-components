import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcMenuDrawer, OpcMenuDrawerSearch } from '../src/opc-menu-drawer';

expect.extend(toHaveNoViolations);

describe('opc-menu-drawer', () => {
  const OPC_COMPONENT = 'opc-menu-drawer';
  const ELEMENT_ID = 'opc-menu-drawer';
  let opcMenuDrawer: OpcMenuDrawer;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcMenuDrawer = window.document.createElement(
      OPC_COMPONENT
    ) as OpcMenuDrawer;
    document.body.appendChild(opcMenuDrawer);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcMenuDrawer).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcMenuDrawer)).toHaveNoViolations();
  });

  it('should render  drawer links on attribute links', async () => {
    opcMenuDrawer.links = [
      {
        title: 'Build In Services',
        links: [
          { name: 'blog', href: '#' },
          { name: 'Documentation', href: '#' },
        ],
      },
    ];
    await opcMenuDrawer.updateComplete;
    expect(opcMenuDrawer.links.length).toEqual(1);
    expect(opcMenuDrawer.links[0].title).toEqual('Build In Services');
    expect(opcMenuDrawer.links[0].links.length).toEqual(2);
    expect(opcMenuDrawer.links[0].links[0].name).toEqual('blog');
  });

  it('should make drawer close and open', async () => {
    expect(opcMenuDrawer.isOpen).toBeFalsy();
    opcMenuDrawer.toggle();
    await opcMenuDrawer.updateComplete;
    expect(opcMenuDrawer.isOpen).toBeTruthy();
  });

  it('should have menu as default title', async () => {
    expect(opcMenuDrawer.title).toEqual('Menu');
  });

  it('should add title', async () => {
    opcMenuDrawer.menuTitle = 'Akhil Mohan';
    await opcMenuDrawer.updateComplete;
    expect(opcMenuDrawer.menuTitle).toEqual('Akhil Mohan');
  });
});

describe('opc-menu-drawer-search', () => {
  const OPC_COMPONENT = 'opc-menu-drawer-search';
  const ELEMENT_ID = 'opc-menu-drawer-search';
  let opcMenuDrawerSearch: OpcMenuDrawerSearch;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcMenuDrawerSearch = window.document.createElement(
      OPC_COMPONENT
    ) as OpcMenuDrawerSearch;
    document.body.appendChild(opcMenuDrawerSearch);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcMenuDrawerSearch).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcMenuDrawerSearch)).toHaveNoViolations();
  });

  it('should change placeholder', async () => {
    const placeholder = 'Search application';
    expect(opcMenuDrawerSearch.placeholder).toEqual('Search');
    opcMenuDrawerSearch.placeholder = placeholder;
    await opcMenuDrawerSearch.updateComplete;
    expect(opcMenuDrawerSearch.placeholder).toEqual(placeholder);
  });
});
