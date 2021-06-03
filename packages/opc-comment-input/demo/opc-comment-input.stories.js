import '../dist/opc-comment-input';
import readme from '../README.md';

export default {
  title: 'Comment Input',
  parameters: {
      notes: { readme },
  }
}

export const opcInputChip = () => `
<opc-comment-input></opc-comment-input>
`;
