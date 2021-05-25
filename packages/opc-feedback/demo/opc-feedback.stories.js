import '../dist/opc-feedback';
import readme from '../README.md';

export default {
    title: 'Feedback',
    parameters: {
        notes: { readme },
    }
  };

export const opcFeedback = (args) => `
    <opc-feedback></opc-feedback>
`;
