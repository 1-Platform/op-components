import { axe, toHaveNoViolations } from 'jest-axe';
import { OpcInputChip } from '../src/opc-input-chip';

expect.extend(toHaveNoViolations);

describe('opc-input-chip', () => {

  const OPC_COMPONENT = 'opc-input-chip';
  const ELEMENT_ID = 'opc-input-chip';
  let opcInputChipElement: OpcInputChip;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  }

  beforeEach(() => {
    opcInputChipElement = window.document.createElement(OPC_COMPONENT) as OpcInputChip;
    document.body.appendChild(opcInputChipElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(OPC_COMPONENT)[0].remove();
  });

  it('is defined', async () => {
    expect(opcInputChipElement).toBeDefined();
  });

  it('has no axe violations', async () => {
    expect(await axe(opcInputChipElement)).toHaveNoViolations()
  });

  it('does not have chips by default', async () => {
    expect(opcInputChipElement.chips.length).toEqual(0);
  });

  it('can initiate chips', async () => {
    opcInputChipElement.chips = [
      { id: 1, name: 'Test chip', isRemovable: true }
    ];
    await opcInputChipElement.updateComplete;
    expect(opcInputChipElement.chips.length).toEqual(1);
    expect(opcInputChipElement.chips[0].name).toEqual('Test chip');
    expect(opcInputChipElement.chips[0].isRemovable).toEqual(true);
  });

});
