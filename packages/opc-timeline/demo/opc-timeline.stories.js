import '../dist/opc-timeline';

export default {
    title: 'Timeline',
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

export const opcTimeline_compact = (args) => `
    <opc-timeline id="timeline1" current-step-index="1" variant="compact"></opc-timeline>
    <script>
        document.querySelector('#timeline1').steps = [undefined, 'Scheduled', 'Loaned', 'Extended', 'Completed', null];
    </script>
`;

export const opcTimeline_default = (args) => `
    <opc-timeline id="timeline1" current-step-index="1" variant="default"></opc-timeline>
    <script>
        document.querySelector('#timeline1').steps = [undefined, 'Scheduled', 'Loaned', 'Extended', 'Completed', null];
    </script>
`;

