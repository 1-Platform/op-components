import { html, fixture, expect } from '@open-wc/testing';

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html`<<%= componentName %> name="<%= authorName %>"></<%= componentName %>>`);
    expect(el.count).exist();
  });
});
