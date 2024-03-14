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

  addProductToCart(addedProduct: Product) {
    this.products.push(addedProduct);
    this.saveCart();
  }
  getProduct() {
    return this.products;
  }
  saveCart(): void {
    localStorage.setItem('shopping-cart', JSON.stringify(this.products));
  }
  loadCart(): void {
    this.products =
      JSON.parse(localStorage.getItem('shopping-cart') as any) || [];
  }
  productInCart(product: any): boolean {
    return this.products.findIndex((x: any) => x.productId === product.productId) > -1;
  }

  addWishlistToCart(product: any) {
    if (!this.productInCart(product)) {
      product.quantity = 1;
      this.addToCart(product);
    } else {
      alert('Item Already In Cart');
    }
  }

  addToCart(product: Product) {
    if (!this.productInCart(product)) {
      product.quantity = 1; // Set quantity to 1 for new products
      this.addProductToCart(product); // Add the product to the cart
      this.updateSubTotal(); // Update the subtotal
      product.in_cart = !product.in_cart; // Toggle the in_cart property of the product
      this.snackbarService.showSnackbar(`\`${product.product_name}\` by \`${product.supplierId}\` added to Cart`);
    } else {
      this.snackbarService.showSnackbar('Product Already In Cart');
    }
  }

  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.productId === product.productId);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
      this.updateSubTotal(); // Update the subtotal after removing the product
    }
  }

  clearProducts() {
    localStorage.clear();
    this.products = []; // Clear the products array
    this.updateSubTotal(); // Update the subtotal after clearing the cart
  }
  updateSubTotal() {
    // Initialize subtotal to 0
    this.subTotal = 0;
    // Loop through each product in the cart and accumulate the prices
    for (const product of this.products) {
      this.subTotal += product.product_price * product.quantity;
    }
  }
}
