import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import {environment} from "../environments/environment";
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductCardDetailComponent} from './product-card/product-card-detail/product-card-detail.component';
import {RouterLink} from "@angular/router";
import {CreateProductComponent} from './create-product/create-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductViewComponent} from './product-view/product-view.component';

import {AppRoutingModule} from './app-routing.module';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput} from "@angular/material/input";

import {ProductListComponent} from "./product-list/product-list.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

import {ProductShellComponent} from './product-shell/product-shell.component';

import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {NavigationComponent} from "./shared/navigation/navigation.component";
import {UserAccountComponent} from "./auth/user-account/user-account.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {ProductFilterComponent} from "./product-filter/product-filter.component";
import {MatOption, MatSelect} from "@angular/material/select";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {WishlistDetailComponent} from "./wishlist/wishlist-detail/wishlist-detail.component";
import {ShoppingCartDetailComponent} from "./shopping-cart/shopping-cart-detail/shopping-cart-detail.component";
import {MatBadge} from "@angular/material/badge";

import {ProductFilterDetailsComponent} from "./product-filter/product-filter-details/product-filter-details.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent,
    CreateProductComponent,
    ProductEditComponent,
    ProductViewComponent,
    ProductListComponent,
    ProductShellComponent,
    UserAccountComponent,
    SignUpComponent,
    LogoutComponent,
    NavigationComponent,
    WishlistComponent,
    ShoppingCartComponent,
    WishlistDetailComponent,
    ShoppingCartDetailComponent,
    ProductFilterComponent,
    ProductFilterDetailsComponent

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
    MatIcon,
    MatDrawerContainer,
    MatDrawer,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatDialogModule,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatBadge,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
