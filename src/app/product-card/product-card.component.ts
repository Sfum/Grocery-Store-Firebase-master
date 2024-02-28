import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {SupplierService} from "../services/supplier.service";
import {Supplier} from "../models/supplier";
import {CartService} from "../services/cart.service";
import {WishlistService} from "../services/wishlist.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  productCollection$!: Observable<Product[]>;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private wishlistService: WishlistService) {}

  ngOnInit() {
    this.productCollection$ = this.productService.productsArrayFiltered$
  }

  onAddToCart(product: any) {
    this.cartService.addToCart(product)
  }
  onAddToWishlist(product: any) {
    this.wishlistService.addToWishlist(product)

  }
  onAddToCompare(product: any) {
    // this.compareService.addToCompare(product)
  }
}
