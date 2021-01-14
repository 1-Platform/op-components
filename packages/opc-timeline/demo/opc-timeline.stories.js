import '../dist/opc-timeline';

export default {
    title: 'Timeline',
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

export const opcTimeline_compact = (args) => `
    <opc-timeline id="timeline1" current-step-index="1" variant="compact">
    <span slot="start-label" style="font-weight: 600;">Loaned on: Apr 28, 2018</span>
    <span slot="end-label" style="font-weight: 600;">Expires on: Oct 27, 2018</span>
    <div slot="timeline-details">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
    </div>
    </opc-timeline>
    <script>
        document.querySelector('#timeline1').steps = [undefined, 'Scheduled', 'Loaned', 'Extended', 'Completed', null];
    </script>
`;

export const opcTimeline_default = (args) => `
    <opc-timeline id="timeline1" current-step-index="1" variant="default">
    <span slot="start-label" style="font-weight: 600;">Loaned on: Apr 28, 2018</span>
    <span slot="end-label" style="font-weight: 600;">Expires on: Oct 27, 2018</span>
    <div slot="timeline-details">
        <h2>Timeline Details</h2>
        The timeline component details go right here, it uses a slot named <strong>timeline-details</strong>. Happy coding :)
    </div>
    </opc-timeline>
    <script>
        document.querySelector('#timeline1').steps = [undefined, 'Scheduled', 'Loaned', 'Extended', 'Completed', null];
    </script>
`;

