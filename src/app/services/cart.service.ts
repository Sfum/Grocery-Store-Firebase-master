import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {SnackbarService} from "./snackbar.service";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  subTotal: number | undefined;

  constructor(private snackbarService: SnackbarService) {}

  addToCart(product: Product) {
    if (!this.productInCart(product)) {
      product.quantity = 1;
      this.addProductToCart(product);
      this.products = [...this.getProduct()];
      this.subTotal = product.product_price;
      product.in_cart = !product.in_cart;
      this.snackbarService.showSnackbar(`\`${product.product_name}\` by \`${product.supplierId}\` added to Cart`);
    } else {
      this.snackbarService.showSnackbar('Product Already In Cart');
    }
  }
  addProductToCart(addedProduct: Product) {
    this.products.push(addedProduct);
    this.saveCart();
  }
  getProduct() {
    return this.products;
  }
  saveCart(): void {
    localStorage.setItem('shopping_cart', JSON.stringify(this.products));
  }
  loadCart(): void {
    this.products =
      JSON.parse(localStorage.getItem('shopping_cart') as any) || [];
  }
  productInCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.productId === product.productId) > -1;
  }
  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.productId === product.productId);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }
  addWishlistToCart(product: any) {
    if (!this.productInCart(product)) {
      product.quantity = 1;
      this.addToCart(product);
    } else {
      alert('Item Already In Cart');
    }
  }
}
