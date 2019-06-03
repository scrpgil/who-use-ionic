import { Component, h, Prop } from "@stencil/core";
import { Product } from "../../models/product";

@Component({
  tag: "product-card",
  styleUrl: "product-card.scss"
})
export class AppHome {
  @Prop() product: Product;

  render() {
    return (
      <ion-card>
        {(() => {
          return <ion-img src={`${this.product.image ? this.product.image : '../../assets/250x150.png'}`} alt=""></ion-img>;
        })()}
        <ion-card-header>
          <ion-card-subtitle>{this.product.author}</ion-card-subtitle>
          <ion-card-title>{this.product.name}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {(() => {
            if (this.product.websiteUrl) {
              return (
                <a href={this.product.websiteUrl} target="_blank">
                  {this.product.websiteUrl}
                </a>
              );
            }
          })()}
          <div>{this.product.description}</div>
        </ion-card-content>
        <div class="card-footer">
          <div class="platforms-wrapper">
            <ion-button
              fill="clear"
              color={`${this.product.platform.ios ? "primary" : "medium"}`}
              href={`${
                this.product.platform.ios ? this.product.platform.ios : "#"
              }`}
            >
              <ion-icon slot="icon-only" name="logo-apple" />
            </ion-button>
            <ion-button
              fill="clear"
              color={`${this.product.platform.android ? "primary" : "medium"}`}
              href={`${
                this.product.platform.android
                  ? this.product.platform.android
                  : "#"
              }`}
            >
              <ion-icon name="logo-android" />
            </ion-button>
            <ion-button
              fill="clear"
              color={`${this.product.platform.web ? "primary" : "medium"}`}
              href={`${
                this.product.platform.web ? this.product.platform.web : "#"
              }`}
            >
              <ion-icon name="logo-html5" />
            </ion-button>
          </div>
        </div>
      </ion-card>
    );
  }
}
