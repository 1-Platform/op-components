import { axe, toHaveNoViolations } from 'jest-axe';
import {
  OpcNotificationDrawer,
  OpcNotificationItem,
} from '../src/opc-notification-drawer';

expect.extend(toHaveNoViolations);

describe('opc-notification-drawer', () => {
  const OPC_COMPONENT = 'opc-notification-drawer';
  const ELEMENT_ID = 'opc-notification-drawer';
  let opcNotificationDrawer: OpcNotificationDrawer;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcNotificationDrawer = window.document.createElement(
      OPC_COMPONENT
    ) as OpcNotificationDrawer;
    document.body.appendChild(opcNotificationDrawer);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcNotificationDrawer).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcNotificationDrawer)).toHaveNoViolations();
  });

  it('should change the title of drawer header', async () => {
    expect(opcNotificationDrawer.title).toEqual('notifications');
    opcNotificationDrawer.title = 'messages';
    await opcNotificationDrawer.updateComplete;
    expect(opcNotificationDrawer.title).toEqual('messages');
  });

  it('should make drawer open and close', async () => {
    expect(opcNotificationDrawer.isOpen).toBeFalsy();
    opcNotificationDrawer.toggle();
    await opcNotificationDrawer.updateComplete;
    expect(opcNotificationDrawer.isOpen).toBeTruthy();
    opcNotificationDrawer.close();
    await opcNotificationDrawer.updateComplete;
    expect(opcNotificationDrawer.isOpen).toBeFalsy();
  });
});

describe('opc-notification-item', () => {
  const OPC_COMPONENT = 'opc-notification-item';
  const ELEMENT_ID = 'opc-notification-item';
  let opcNotificationItem: OpcNotificationItem;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    opcNotificationItem = window.document.createElement(
      OPC_COMPONENT
    ) as OpcNotificationItem;
    document.body.appendChild(opcNotificationItem);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcNotificationItem).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcNotificationItem)).toHaveNoViolations();
  });

  it('should change title', async () => {
    expect(opcNotificationItem.title).toEqual('');
    opcNotificationItem.title = 'Success';
    await opcNotificationItem.updateComplete;
    expect(opcNotificationItem.title).toEqual('Success');
  });

  it('should change variant', async () => {
    expect(opcNotificationItem.variant).toEqual('info');
    opcNotificationItem.variant = 'success';
    await opcNotificationItem.updateComplete;
    expect(opcNotificationItem.variant).toEqual('success');
  });
});
