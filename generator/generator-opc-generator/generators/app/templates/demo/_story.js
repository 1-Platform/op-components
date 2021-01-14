import '../dist/<%= componentName %>';

export default {
    title: '<%= componentClass %>',
}

export const Primary = () => `
<<%= componentName %>></<%= componentName %>>
`;

Primary.storyName = `<%= componentClass %>`;
