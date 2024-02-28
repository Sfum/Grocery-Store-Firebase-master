import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Product} from "../../models/product";
import {Router, RouterLink} from "@angular/router";
import {MatCard} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {DecimalPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-wishlist-detail',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatIcon,
    NgForOf,
    RouterLink,
    DecimalPipe
  ],
  templateUrl: './wishlist-detail.component.html',
  styleUrl: './wishlist-detail.component.sass'
})
export class WishlistDetailComponent {

  @Input()  products!: Product[];

  @Output() addToCartEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removeWishlistEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    public router: Router,
    public location: Location) {
  }

  addProductToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }

  removeFromWishlist(product: Product) {
    this.removeWishlistEvent.emit(product);
  }

}
