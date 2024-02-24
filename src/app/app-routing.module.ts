import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductCardComponent} from "./product-card/product-card.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ProductViewComponent} from "./product-view/product-view.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {UserAccountComponent} from "./auth/user-account/user-account.component";
// import {AuthGuard} from "@angular/fire/auth-guard";

const routes: Routes = [
  {path: '', component: ProductCardComponent},
  {path: 'view/:productId', component: ProductViewComponent},
  {path: 'products-list', component: ProductListComponent},
  {path: ':productId', component: ProductEditComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'login-user', component: UserAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
