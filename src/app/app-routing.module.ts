import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ProductCardComponent} from "./product-card/product-card.component";

const routes: Routes = [
  { path: '', component: ProductCardComponent },
  { path: ':productId', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
