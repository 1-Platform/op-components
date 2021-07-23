import '../dist/opc-menu-drawer';
import readme from '../README.md';

export default {
    title: 'OpcMenuDrawer',
    parameters: {
        notes: { readme },
    }
}

export const Primary = () => `
<opc-menu-drawer></opc-menu-drawer>
`;

Primary.storyName = `OpcMenuDrawer`;
