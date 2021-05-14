import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "app-nav-mobile",
  styleUrl: "app-nav-mobile.scss",
  shadow: true
})
export class AppNavMobile {
  @Prop() show: boolean;
  techs = [
    {
      title: "日本語ドキュメーション",
      icon: "library-outline",
      url: "https://ionicframework.jp/docs",
      target: "_self"
    },
    {
      title: "利用事例",
      icon: "albums-outline",
      url: "/case",
      target: "_self"
    },
    {
      title: "Github",
      icon: "logo-github",
      url: "https://github.com/ionic-jp/community-site",
      target: "_blank"
    },
    {
      title: "Twitter",
      icon: "logo-twitter",
      url: "https://twitter.com/ionic_japan",
      target: "_blank"
    },
    {
      title: "イベント",
      icon: "ticket-outline",
      url: "https://ionic-jp.connpass.com/",
      target: "_blank"
    }
  ];

  render() {
    return (
      <Host
        class={{
          show: this.show
        }}
      >
        <ion-list>
          {this.techs.map(tech => (
            <ion-item button href={tech.url} target={tech.target}>
              <ion-icon slot="start" name={tech.icon} />
              <ion-label>
                <h3>{tech.title}</h3>
              </ion-label>
            </ion-item>
          ))}
        </ion-list>
      </Host>
    );
  }
}
