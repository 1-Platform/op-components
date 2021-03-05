import '../dist/<%= componentName %>';
import readme from '../README.md';

export default {
    title: '<%= componentClass %>',
    parameters: {
        notes: { readme },
    }
}

export const Primary = () => `
<<%= componentName %>></<%= componentName %>>
`;

Primary.storyName = `<%= componentClass %>`;
