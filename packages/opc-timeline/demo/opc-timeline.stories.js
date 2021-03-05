import '../dist/opc-timeline';
import readme from '../README.md';

export default {
    title: 'Timeline',
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    parameters: {
        notes: { readme },
    }
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

