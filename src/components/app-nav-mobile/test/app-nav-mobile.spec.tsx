import { newSpecPage } from '@stencil/core/testing';
import { AppNavMobile } from '../app-nav-mobile';

describe('app-nav-mobile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppNavMobile],
      html: `<app-nav-mobile></app-nav-mobile>`,
    });
    expect(page.root).toEqualHtml(`
      <app-nav-mobile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-nav-mobile>
    `);
  });
});
