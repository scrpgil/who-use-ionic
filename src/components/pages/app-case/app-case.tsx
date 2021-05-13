import { Component, h, State, Host } from "@stencil/core";
import { DataProvider } from "../../../providers/data";
import { IProduct } from "../../../models/product";

@Component({
  tag: "app-case",
  styleUrl: "app-case.scss"
})
export class AppCase {
  @State() products: IProduct[] = [];
  @State() countryCode: string = "ALL";

  async componentWillLoad() {
    await this.getData();
  }

  async showSortAlert() {
    const alert = document.createElement("ion-alert");
    alert.header = "国で絞り込み";
    alert.inputs = [
      {
        name: "all",
        type: "radio",
        label: "すべて",
        value: "ALL",
        checked: this.countryCode == "ALL"
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
      }
    ];
    alert.buttons = [
      {
        text: "キャンセル",
        role: "cancel",
        cssClass: "secondary",
        handler: () => {}
      },
      {
        text: "絞り込む",
        handler: data => {
          this.countryCode = data;
        }
      }
    ];
    document.body.appendChild(alert);
    return alert.present();
  }

  async getData() {
    this.products = await DataProvider.get();
  }
  render() {
    return (
      <Host>
        <app-header>Ionic利用事例集</app-header>
        <ion-content class="ion-padding">
          <div class="products-wrapper">
            {(() => {
              const list = [];
              for (const product of this.products) {
                if (this.countryCode == "ALL") {
                  list.push(<product-card product={product}/>);
                } else if (this.countryCode == product.country) {
                  list.push(<product-card product={product}/>);
                }
              }
              return list;
            })()}
          </div>
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button onClick={() => this.showSortAlert()}>
              <ion-icon name="funnel"/>
            </ion-fab-button>
          </ion-fab>
        </ion-content>
      </Host>
    )
  }
}
