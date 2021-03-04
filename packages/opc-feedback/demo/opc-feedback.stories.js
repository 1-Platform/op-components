import '../dist/opc-feedback';
import readme from '../README.md';

export default {
    title: 'Feedback',
    parameters: {
        notes: { readme },
    }
  };

export const opcTimeline_compact = (args) => `
    <opc-feedback></opc-feedback>
`;
