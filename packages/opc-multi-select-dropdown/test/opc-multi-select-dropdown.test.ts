import {LitElement} from 'lit-element';
import { MultiSelectDropdown } from '../src/opc-multi-select-dropdown';

describe('opc-multi-select-dropdown', () => {

    const OPC_COMPONENT = 'opc-multi-select-dropdown';
    let opcMultiSelectDropdown: LitElement;

    beforeEach(() => {
        opcMultiSelectDropdown = window.document.createElement(OPC_COMPONENT) as MultiSelectDropdown;
        document.body.appendChild(opcMultiSelectDropdown);
    });

    afterEach(() => {
       document.querySelector(OPC_COMPONENT).remove();
    });

    it('is defined', async () => {
        expect(opcMultiSelectDropdown).toBeDefined();
      });
});
