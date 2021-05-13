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
              <ion-button href="https://ionicframework.jp">
                <ion-icon slot="icon-only" name="logo-ionic" />
              </ion-button>
            </ion-buttons>
            <ion-title><slot></slot></ion-title>
            <ion-buttons slot="end">
              <ion-button fill="outline" href="https://ionicframework.jp/docs">
                日本語ドキュメンテーション
              </ion-button>
              <ion-button href="https://github.com/ionic-jp/who-use-ionic">
                <ion-icon slot="icon-only" name="logo-github" />
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
      </Host>
    );
  }

}
