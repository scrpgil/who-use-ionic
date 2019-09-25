import { Component, h, Prop, State } from "@stencil/core";
import { DataProvider } from "../../providers/data";
import { IProduct } from "../../models/product";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() products: IProduct[] = [];

  @Prop({ connect: "ion-alert-controller" })
  alertCtrl: HTMLIonAlertControllerElement;

  @State() countryCode: string = "ALL";

  async componentWillLoad() {
    await this.getData();
    const loading: HTMLElement = document.querySelector(
      ".install-loading-spinner"
    );
    loading.style.display = "none";
  }

  async showSortAlert() {
    const alert = await this.alertCtrl.create({
      header: "国で絞り込み",
      inputs: [
        {
          name: "all",
          type: "radio",
          label: "すべて",
          value: "ALL",
          checked: this.countryCode == "all"
        },
        {
          name: "jp",
          type: "radio",
          label: "日本",
          value: "JP",
          checked: this.countryCode == "JP"
        },
        {
          name: "us",
          type: "radio",
          label: "アメリカ",
          value: "US",
          checked: this.countryCode == "US"
        },
        {
          name: "es",
          type: "radio",
          label: "スペイン",
          value: "ES",
          checked: this.countryCode == "ES"
        },
        {
          name: "ir",
          type: "radio",
          label: "イラン",
          value: "IR",
          checked: this.countryCode == "IR"
        },
        {
          name: "cw",
          type: "radio",
          label: "キュラソー",
          value: "CW",
          checked: this.countryCode == "CW"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "Ok",
          handler: data => {
            this.countryCode = data;
          }
        }
      ]
    });
    await alert.present();
  }

  async getData() {
    this.products = await DataProvider.get();
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-button href="https://ionicframework.jp">
              <ion-icon size="large" name="logo-ionic" />
            </ion-button>
          </ion-buttons>
          <ion-title>Who use Ionic?</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.showSortAlert()}>
              <ion-icon name="funnel" />
            </ion-button>
            <ion-button href="https://github.com/ionic-jp/who-use-ionic">
              <ion-icon name="logo-github" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <div class="products-wrapper">
          {(() => {
            const list = [];
            for (const product of this.products) {
              if (this.countryCode == "ALL") {
                list.push(<product-card product={product} />);
              } else if (this.countryCode == product.country) {
                list.push(<product-card product={product} />);
              }
            }
            return list;
          })()}
        </div>
      </ion-content>
    ];
  }
}
