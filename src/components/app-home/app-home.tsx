import { Component, h, State } from "@stencil/core";
import { DataProvider } from "../../providers/data";
import { IProduct } from "../../models/product";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() products: IProduct[] = [];

  async componentWillLoad() {
    await this.getData();
    const loading: HTMLElement = document.querySelector('.install-loading-spinner');
    loading.style.display = 'none';
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
              list.push(<product-card product={product} />);
            }
            return list;
          })()}
        </div>
      </ion-content>
    ];
  }
}
