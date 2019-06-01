import { Component, h, State } from "@stencil/core";
import { DataProvider } from "../../providers/data";
import { Product } from "../../models/product";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() products: Product[] = [];

  componentWillLoad() {
    this.getData();
  }

  async getData() {
    this.products = await DataProvider.get();
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Who use Ionic?</ion-title>
          <ion-buttons slot="end">
            <ion-button href="https://github.com/scrpgil/who-use-ionic">
              <ion-icon name="logo-github" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <h1>Ionicを使用しているプロダクトをリストアップしています。</h1>
        <div class="products-wrapper">
          {(() => {
            let list = [];
            for (const product of this.products) {
              console.log(product);
              list.push(<product-card product={product} />);
            }
            return list;
          })()}
        </div>
      </ion-content>
    ];
  }
}
