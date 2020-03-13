import { html } from 'lit-html';

export const opHeader = html`
  <style>
    header {
      height: 4rem;
      border-bottom: 1px solid #ddd;

      padding: 0 3.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h4 {
      color: var(--op-gray-800);
    }

    h4 span {
      color: var(--op-gray-600);
      font-weight: 400;
    }

    nav {
      display: flex;
      height: 100%;
    }

    nav > a {
      height: 100%;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      border-bottom: 0px solid transparent;
      transition: all 320ms ease-in-out;
      cursor: pointer;
    }

    nav > a.active {
      border-bottom: 2px solid var(--op-red-400);
      color: var(--op-red-400);
    }

    nav > a:hover {
      border-bottom: 2px solid var(--op-gray-800);
      color: var(--op-gray-800);
    }
  </style>
  <header>
    <h4 class="heading-three">
      One Platform
      <span> Components </span>
    </h4>
    <nav>
      <a> Design guidelines </a>
      <a> Components </a>
    </nav>
  </header>
`;
