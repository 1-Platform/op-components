import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcMenuDrawer } from '../src/opc-menu-drawer';

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
    opcMenuDrawer.isOpen = true;
    await opcMenuDrawer.updateComplete;
    expect(opcMenuDrawer.isOpen).toBeTruthy();
  });

  it('should add headerTitle', async () => {
    opcMenuDrawer.headerTitle = 'Akhil Mohan';
    await opcMenuDrawer.updateComplete;
    expect(opcMenuDrawer.headerTitle).toEqual('Akhil Mohan');
  });
});
