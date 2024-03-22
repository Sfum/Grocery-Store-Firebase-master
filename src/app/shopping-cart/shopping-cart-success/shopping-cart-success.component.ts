import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-success',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-success.component.html',
  styleUrl: './shopping-cart-success.component.sass'
})
export class ShoppingCartSuccessComponent {
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  clear() {
    this.cartService.clearProducts();
    this.router.navigate(['/']);
  }
}
