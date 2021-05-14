import { Component, Host, h } from '@stencil/core';
import Helmet from '@stencil/helmet';
import { policyData } from '../../../providers/policy';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <Helmet>
          <title>Ionic Japan User Group</title>
          <meta name="description" content="Ionic Japan User Groupは、Web技術を使ったアプリ開発について情報交換するコミュニティです。" />
          <meta name="twitter:title" content="Ionic Japan User Group - Ionic日本ユーザ会"/>
          <meta name="twitter:description" content="Ionic Japan User Groupは、Web技術を使ったアプリ開発について情報交換するコミュニティです。"/>
          <meta name="twitter:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>

          <meta property="og:url" content="https://ionicframework.jp/"/>
          <meta property="og:title" content="Ionic Japan User Group - Ionic日本ユーザ会"/>
          <meta property="og:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>
          <meta property="og:description" content="Ionic Japan User Groupは、Web技術を使ったアプリ開発について情報交換するコミュニティです。"/>
        </Helmet>
        <app-header></app-header>
        <ion-content>
          <main>
            <div class="lead ion-padding">
              <img class="hero-image" src="./assets/logo/ionic_japan.svg" width="120px" />
              <p>Ionic Japan User Groupは、<br />Web技術を使ったアプリ開発について情報交換するコミュニティです。</p>
            </div>

            <ul class="list-native">
              <li>
                <ion-button href="https://ionicframework.jp/docs/" fill="clear" size="large" target="_blank">
                  <ion-icon name="logo-ionic" slot="start" color="primary"></ion-icon>Ionic Framework
                </ion-button>
              </li>
              <li>
                <ion-button href="https://capacitorjs.jp/" fill="clear" size="large" target="_blank">
                  <ion-icon name="logo-stencil" slot="start" color="secondary"></ion-icon>Capacitor
                </ion-button>
              </li>
              <li>
                <ion-button href="https://stenciljs.jp/" fill="clear" size="large" target="_blank">
                  <ion-icon name="logo-capacitor" slot="start" color="medium"></ion-icon>Stencil
                </ion-button>
              </li>
            </ul>
            <div class="slack-card">
              <ion-card href="https://ionic-jp.herokuapp.com" target="_blank">
                <ion-card-content>
                  <img src="./assets/logo/slack.svg" width="120px" />
                  <p>興味がある方は、まずはslackにご参加ください！</p>
                </ion-card-content>
              </ion-card>
            </div>
          </main>

          <section class="contribute">
            <div>
              <h2>Contribute</h2>
              <p>
                誰でもOSSに貢献することができます。
                以前Ionicの日本語情報が少なかったことから組織したユーザコミュニティですので、情報を発信する側にまわっていたくことを歓迎します。
              </p>
              <ul>
                <li>
                  <ion-card>
                    <ion-card-header><ion-icon name="document-text-outline"></ion-icon></ion-card-header>
                    <ion-card-content>
                      <h3>ドキュメント翻訳</h3>
                      <p>Ionic/Capacitor/Stencilのドキュメントの翻訳をお手伝いいただける方を募集しています。</p>
                    </ion-card-content>
                  </ion-card>
                </li>
                <li>
                  <ion-card>
                    <ion-card-header><ion-icon name="people-outline"></ion-icon></ion-card-header>
                    <ion-card-content>
                      <h3>登壇</h3>
                      <p>Ionic Meetupでは登壇者を募集しています。あなたの取組について教えてくれませんか？</p>
                    </ion-card-content>
                  </ion-card>
                </li>
                <li>
                  <ion-card>
                    <ion-card-header><ion-icon name="wifi-outline"></ion-icon></ion-card-header>
                    <ion-card-content>
                      <h3>ブログ</h3>
                      <p>困ったことをどう解決したかを記事にすると、同じ問題に直面した人の助けになります。</p>
                    </ion-card-content>
                  </ion-card>
                </li>
              </ul>
            </div>
          </section>
          <section class="policy">
            <h2><span>Community Policy</span></h2>
            <div>
              <p>Ionic Japan User Groupは、 Web技術を使ったアプリ開発について情報交換するユーザコミュニティです。 コミュニティとしての健全性・持続性を保つために、以下の行動を禁止します。これらの行動を繰り返す参加者がいましたら、運営メンバーにご連絡ください。</p>
              <ul innerHTML={(() => policyData.map(d => `<li>${d}</li>`).join(''))()}>
              </ul>
            </div>
          </section>
          <app-footer></app-footer>
        </ion-content>
      </Host>
    );
  }
}
