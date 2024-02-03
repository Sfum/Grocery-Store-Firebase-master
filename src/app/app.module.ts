import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from "../environments/environment";
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductCardDetailComponent} from './product-card/product-card-detail/product-card-detail.component';
import {RouterLink} from "@angular/router";
import {CreateProductComponent} from './create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductViewComponent} from './product-view/product-view.component';

import {AppRoutingModule} from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

import {ProductListComponent} from "./product-list/product-list.component";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent,
    CreateProductComponent,
    ProductEditComponent,
    ProductViewComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterLink,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCard,
    MatButton,
    MatInput,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
