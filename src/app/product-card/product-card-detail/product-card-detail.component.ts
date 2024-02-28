import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.sass']
})
export class ProductCardDetailComponent {

  @Input() product!: Product
  @Input() supplier!: Supplier

  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() addToWishlistEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() addToCompareEvent: EventEmitter<any> = new EventEmitter<any>();

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

  addToWishlist(product: Product) {
    this.addToWishlistEvent.emit(product);
  }

  // addToCompare(product: any) {
  //   this.addToCompareEvent.emit(product);
  // }

}
