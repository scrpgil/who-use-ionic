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
        <p>Caught a mistake or want to contribute to the documentation? <a href="https://github.com/ionic-jp/community-site">Edit this on GitHub!</a> Deployed on <a href="https://www.netlify.com/">Netlify</a>.</p>
      </Host>
    );
  }

}
