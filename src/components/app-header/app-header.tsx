import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
})
export class AppHeader {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button href="/">
                <ion-icon slot="start" name="logo-ionic" />
                Ionic Japan
              </ion-button>
              <ion-button href="https://ionicframework.jp/docs">
                <ion-icon name="library-outline" slot="start"></ion-icon>
                日本語ドキュメンテーション
              </ion-button>
              <ion-button href="/case">
                利用事例
              </ion-button>
            </ion-buttons>

            <ion-buttons slot="end">
              <ion-button href="https://github.com/ionic-jp/community-site" target="_blank">
                <ion-icon slot="icon-only" name="logo-github" />
              </ion-button>
              <ion-button href="https://twitter.com/ionic_japan" target="_blank">
                <ion-icon slot="icon-only" name="logo-twitter" />
              </ion-button>
              <ion-button href="https://ionic-jp.connpass.com/" target="_blank">
                イベント
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
      </Host>
    );
  }

}
