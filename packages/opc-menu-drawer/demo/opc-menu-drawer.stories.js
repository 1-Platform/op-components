import "../dist/opc-menu-drawer";
import readme from "../README.md";

export default {
  title: "OpcMenuDrawer",
  parameters: {
    notes: { readme },
  },
  argTypes: {
    isOpen: { control: "boolean", description: "To open and close the drawer" },
    headerTitle: {
      control: "string",
      description: "Header title of the drawer",
    },
  },
};

export const opcMenuDrawer = () => `
<opc-menu-drawer isOpen headerTitle="Akhil Mohan"></opc-menu-drawer>
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
document.querySelector('opc-menu-drawer').links = links;
</script>
`;
