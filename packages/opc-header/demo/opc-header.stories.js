import '../dist/opc-header';
import readme from '../README.md';

export default {
    title: 'Header',
    parameters: {
      notes: { readme },
    },
    argsTypes: {
      breadcrumbs: [{"name":"Home", "href":"#"},{"name":"Outages", "href":"#"}],
      links: [{"name":"Video Guide", "href":"#", "icon":"fa-play-circle"},{"name":"FAQs", "href":"#", "icon":"fa-question-circle"},{"name":"Documentation", "href":"#", "icon":"fa-file"}],
    },
    theme: {
      values: [
        {
          name: 'Default',
          value: 'default'
        },
        {
          name: 'Dark',
          value: 'dark',
        },
        {
          name: 'Red',
          value: 'red',
        },
        {
          name: 'Blue',
          value: 'blue'
        },
        {
          name: 'Cyan',
          value: 'cyan'
        }
      ]
    }
}

const opcHeader = (args) => {
  console.log(args.breadcrumbs, args.links);
  return`
    <link rel="stylesheet" href="https://unpkg.com/@patternfly/patternfly/patternfly.css" crossorigin="anonymous">
    <opc-header heading="Outage Management" id="header1" theme="default">
      <opc-header-breadcrumb slot="breadcrumb" id="breadcrumb1"></opc-header-breadcrumb>
      <opc-header-links slot="links" id="links1"></opc-header-links>
    </opc-header>
    <script>
      var breadcrumbs = [{"name":"Home", "href":"#"},{"name":"Outages", "href":"#"}];
      var links = [{"name":"Video Guide", "href":"#", "icon":"fa-play-circle"},{"name":"FAQs", "href":"#", "icon":"fa-question-circle"},{"name":"Documentation", "href":"#", "icon":"fa-file"}];

      document.querySelector("#breadcrumb1").opcHeaderBreadcrumb = breadcrumbs;
      document.querySelector("#links1").opcHeaderLinks = links;
    </script>
    `
  };

const Template = (args) => opcHeader(args)

export const Primary = Template.bind({});
