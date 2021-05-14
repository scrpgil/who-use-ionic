import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
  shadow: true,
})
export class AppFooter {

  render() {
    return (
      <Host>
        <hr />
        <p>This site is powered by <a href="https://www.netlify.com/">Netlify</a> .</p>
      </Host>
    );
  }

}
