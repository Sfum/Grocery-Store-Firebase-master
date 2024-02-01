import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from "../environments/environment";
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardDetailComponent } from './product-card/product-card-detail/product-card-detail.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent
  ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        RouterLink
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
