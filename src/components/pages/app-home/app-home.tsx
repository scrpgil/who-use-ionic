import { Component, Host, h } from '@stencil/core';
import Helmet from '@stencil/helmet';

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
                誰でも活動に貢献することができます。
                以前Ionicの日本語情報が少なかったことから組織したユーザコミュニティですので、情報を発信する側にまわっていたくことを歓迎します。
              </p>
              <ul>
                <li>
                  <ion-card>
                    <ion-card-header><ion-icon name="document-text-outline"></ion-icon></ion-card-header>
                    <ion-card-content>
                      <h3>ドキュメント翻訳</h3>
                      <p>Ionic/Capacitor/Stencilのドキュメントをコミュニティで翻訳・公開しています。</p>
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
                      <p>あなたが困ったことをどう解決したかを記事にすると、同じ問題に直面した人の助けになります。</p>
                    </ion-card-content>
                  </ion-card>
                </li>
              </ul>
            </div>
          </section>
          <section class="policy">
            <h2><span>Community Policy</span></h2>
            <div>
              <p>
                Ionic Japan User Groupは、 Web技術を使ったアプリ開発について情報交換するユーザコミュニティです。 コミュニティとしての健全性・持続性を保つために、以下の行動を禁止します。これらの行動を繰り返す参加者がいましたら、運営メンバーにご連絡ください。
              </p>
              <hr />
              <ul>
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>他のユーザに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザに成りすます行為</li>
                <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引または助長する表現、その他反社会的な内容を含み他人に不快感を与える表現、もしくは行為</li>
                <li>営業、宣伝、広告、求人、勧誘、その他営利を目的とする行為（事前にコミュニティで認めたものを除きます。）、性行為やわいせつな行為を目的とする行為、他のお客様に対する嫌がらせや誹謗中傷を目的とする行為</li>
                <li>宗教活動または宗教団体への勧誘行為</li>
              </ul>
            </div>
          </section>
        </ion-content>
      </Host>
    );
  }
}
