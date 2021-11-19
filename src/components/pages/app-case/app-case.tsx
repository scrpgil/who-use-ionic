import { Component, h, State, Host } from "@stencil/core";
import { IProduct } from "../../../models/product";
import { caseFilterAlertOption } from '../../../helpers/utils';
import Helmet from '@stencil/helmet';
import { productData } from '../../../providers/product';

@Component({
  tag: "app-case",
  styleUrl: "app-case.scss",
  shadow: true,
})
export class AppCase {
  @State() countryCode: string = "ALL";
  @State() products: IProduct[] = [];

  async showSortAlert() {
    const alert = Object.assign(document.createElement("ion-alert"),
      caseFilterAlertOption(this.countryCode),{
      buttons: [
        {
          text: "キャンセル",
        },
        {
          text: "絞り込む",
          handler: data => this.countryCode = data
        }
      ]
    });
    document.body.appendChild(alert);
    return alert.present();
  }

  componentWillLoad() {
    this.products = productData;
  }

  render() {
    return (
      <Host>
        <Helmet>
          <title>Ionic利用事例集</title>
          <meta name="description" content="Ionicを使用しているプロダクトのまとめ" />
          <meta name="twitter:title" content="Ionic利用事例集"/>
          <meta name="twitter:description" content="Ionicの利用事例を集めたショーケース"/>
          <meta name="twitter:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>

          <meta property="og:url" content="https://ionicframework.jp/case/"/>
          <meta property="og:title" content="Ionic利用事例集"/>
          <meta property="og:image" content="https://ionicframework.com/img/meta/ionic-framework-og.png"/>
          <meta property="og:description" content="Ionicの利用事例を集めたショーケース"/>
        </Helmet>
        <app-header></app-header>
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
          <app-footer></app-footer>
        </ion-content>
      </Host>
    )
  }
}
