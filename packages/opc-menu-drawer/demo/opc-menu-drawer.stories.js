import '../dist/opc-menu-drawer';
import readme from '../README.md';

export default {
  title: 'OpcMenuDrawer',
  parameters: {
    notes: { readme },
  },
  argTypes: {
    headerTitle: {
      control: 'string',
      description: 'Header title of the drawer',
    },
  },
};

export const opcMenuDrawer = () => `
<opc-menu-drawer menuTitle="Akhil Mohan"></opc-menu-drawer>
<script>
var links = [{
        title: "BUILT-IN SERVICES",
        links: [{
                name: "Blog",
                href: "#"
            },
            {
                name: "Documentation",
                href: "#"
            }
        ]
    },
    {
        title: "BUILT-IN SERVICES",
        links: [{
                name: "Blog",
                href: "#"
            },
            {
                name: "Documentation",
                href: "#"
            }
        ]
    }
];
const drawer = document.querySelector('opc-menu-drawer');
drawer.links = links;
drawer.open();
</script>
`;
