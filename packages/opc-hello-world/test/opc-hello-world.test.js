import { html, fixture, expect } from '@open-wc/testing';

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html`<opc-hello-world name="hybridx"></opc-hello-world>`);
    expect(el.count).exist();
  });
});
