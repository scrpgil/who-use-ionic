import { newSpecPage } from '@stencil/core/testing';
import { AppFooter } from '../app-footer';

describe('app-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppFooter],
      html: `<app-footer></app-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <app-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-footer>
    `);
  });
});
