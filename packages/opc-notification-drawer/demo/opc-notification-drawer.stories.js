import '../dist/opc-notification-drawer';
import readme from '../README.md';

export default {
  title: 'Opc Notification Drawer',
  parameters: {
    notes: { readme },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'To open the drawer',
    },
    title: {
      control: 'string',
      description: 'Title of the drawer',
      defaultValue: 'notifications',
    },
  },
};

export const OpcNotificationDrawer = () => `
<opc-notification-drawer isOpen>
    <opc-notification-item title="Success alert title" variant="success" key="notification1">
        <span>Success alert description. This should tell the user more information about the alert. This is a link.</span>
    </opc-notification-item>
    <opc-notification-item title="Information alert title" variant="info">
        <span>Information alert description. This should tell the user more information about the alert.</span>
    </opc-notification-item>
    <opc-notification-item title="Danger alert title" variant="danger">
        <span>Danger alert description. This should tell the user more information about the alert. This is a link.</span>
    </opc-notification-item>
    <opc-notification-item title="Warn alert title" variant="warn">
        <span>Warn alert description. This should tell the user more information about the alert. This is a link.</span>
    </opc-notification-item>
</opc-notification-drawer>
`;
