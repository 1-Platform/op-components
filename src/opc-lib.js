import {html, render} from 'lit-html';
import { opHeader } from './opc-header.js';

const sayHello = () => html`
  ${opHeader}
  <main>
  </main>
  <footer>
  </footer>
`;
render(sayHello('World'), document.body);
