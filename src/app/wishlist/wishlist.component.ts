import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {WishlistDetailComponent} from "./wishlist-detail/wishlist-detail.component";
import {CartService} from "../services/cart.service";
import {WishlistService} from "../services/wishlist.service";

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    WishlistDetailComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.sass'
})
export class WishlistComponent implements  OnInit{

  products: Product[] = [];
  products$ = this.productService.products$

  constructor(private cartService: CartService,
              private wishlistService: WishlistService,
              private productService: ProductService) {
  }
  ngOnInit() {
    this.wishlistService.loadCart();
    this.products = this.wishlistService.getProduct();
  }

  onAddToCart(product: Product) {
    this.cartService.addWishlistToCart(product);
  }

  removeFromWishlist(product: Product) {
    this.wishlistService.removeProduct(product);
  }

}
