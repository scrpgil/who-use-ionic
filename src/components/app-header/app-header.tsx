import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "app-header",
  styleUrl: "app-header.scss",
  shadow: true
})
export class AppHeader {
  /**
   * スマホ用のナビゲーションの表示切り替え
   */
  @State() mobileNav: boolean = false;

  /**
   * ナビゲーションのモード切替
   */
  @State() mode: "short";

  private toggleMobileNav = () => {
    this.mobileNav = !this.mobileNav;
  };

  componentDidLoad() {
    if (document.documentElement.clientWidth < 690) {
      this.mode = "short";
    }
  }

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
              <ion-button
                class={{
                  "dom-hide": this.mode === "short" && true
                }}
                href="https://ionicframework.jp/docs"
              >
                <ion-icon name="library-outline" slot="start" />
                日本語ドキュメンテーション
              </ion-button>
              <ion-button
                class={{
                  "dom-hide": this.mode === "short" && true
                }}
                href="/case"
              >
                利用事例
              </ion-button>
            </ion-buttons>

            <ion-buttons slot="end">
              <ion-button
                class={{
                  "dom-hide": this.mode === "short" && true
                }}
                href="https://github.com/ionic-jp/community-site"
                target="_blank"
              >
                <ion-icon slot="icon-only" size="small" name="logo-github" />
              </ion-button>
              <ion-button
                class={{
                  "dom-hide": this.mode === "short" && true
                }}
                href="https://twitter.com/ionic_japan"
                target="_blank"
              >
                <ion-icon slot="icon-only" size="small" name="logo-twitter" />
              </ion-button>
              <ion-button
                class={{
                  "dom-hide": this.mode === "short" && true
                }}
                href="https://ionic-jp.connpass.com/"
                target="_blank"
              >
                イベント
              </ion-button>
              <ion-button
                class={{
                  "dom-show": this.mode === "short" && true,
                  "default-hide": true
                }}
                onClick={this.toggleMobileNav}
              >
                <ion-icon name="ellipsis-vertical-outline" />
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
          <app-nav-mobile show={this.mobileNav} />
        </ion-header>
      </Host>
    );
  }
}
