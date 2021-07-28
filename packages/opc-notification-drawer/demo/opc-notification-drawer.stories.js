import '../dist/opc-notification-drawer';
import readme from '../README.md';

export default {
    title: 'OpcNotificationDrawer',
    parameters: {
        notes: { readme },
    }
}

export const Primary = () => `
<opc-notification-drawer></opc-notification-drawer>
`;

Primary.storyName = `OpcNotificationDrawer`;
