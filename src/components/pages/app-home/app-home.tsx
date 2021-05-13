import { Component, Host, h } from '@stencil/core';
import Helmet from '@stencil/helmet';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  render() {
    return (
      <Host>
        <Helmet>
          <title>Ionic Japan User Group</title>
          <meta name="description" content="Ionic Japan User Groupは、日本のIonicユーザによるOSSコミュニティです。" />
          <meta name="twitter:title" content="Ionic Japan User Group - Ionic日本ユーザ会"/>
          <meta name="twitter:description" content="Ionic Japan User Groupは、日本のIonicユーザによるOSSコミュニティです。"/>
          <meta name="twitter:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>

          <meta property="og:url" content="https://ionicframework.jp/"/>
          <meta property="og:title" content="Ionic Japan User Group - Ionic日本ユーザ会"/>
          <meta property="og:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>
          <meta property="og:description" content="Ionic Japan User Groupは、日本のIonicユーザによるOSSコミュニティです。"/>
        </Helmet>
        <app-header>Ionic Japan User Group</app-header>
        <ion-content class="ion-padding">
          
        </ion-content>
      </Host>
    );
  }
}
