import '../dist/opc-nav';
import readme from '../README.md';

export default {
  title: 'OpcNav',
  parameters: {
    notes: { readme },
  },
  argTypes: {
    isSearchHidden: {
      control: 'boolean',
      description: 'To hide the searchbar',
    },
  },
};

export const opcNav = () => `
<opc-nav>
    <img slot="opc-nav-logo" src="./logo.svg" height="28px" alt="logo" />
</opc-nav>
<script>
const links = [
        { name: "Blog", href: "#" },
        { name: "Documentation", href: "#" }
    ];
document.querySelector('opc-nav').links = links;
</script>
`;
