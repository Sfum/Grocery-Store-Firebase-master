import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {UserAccountComponent} from "./auth/user-account/user-account.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {ProductShellComponent} from "./product-shell/product-shell.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
// import {AuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  {path: '', component: ProductShellComponent},
  {path: 'view/:productId', component: ProductViewComponent},
  {path: ':productId', component: ProductEditComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'login', component: UserAccountComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
