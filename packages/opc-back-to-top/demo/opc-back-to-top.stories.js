import '../dist/opc-back-to-top';
import readme from '../README.md';

export default {
    title: 'Back-To-Top',
    parameters: {
        notes: { readme },
    }
  };

export const opcBackToTop = (args) => `
    <opc-back-to-top></opc-back-to-top>
`;
