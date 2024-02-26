import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ProductFilterDetailsComponent} from "./product-filter-details/product-filter-details.component";
import {ProductService} from "../services/product.service";
import {SupplierService} from "../services/supplier.service";
import {Observable} from "rxjs";
import {Supplier} from "../models/supplier";
import firebase from "firebase/compat";

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    ProductFilterDetailsComponent
  ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.sass'
})
export class ProductFilterComponent {
  user$: Observable<firebase.User>;


  filterField$: Observable<Supplier[]>

  constructor(private productService: ProductService,
              private supplierService: SupplierService) {
    this.filterField$ = this.supplierService.getSupplierCollection()
  }



  optionSupplierSelected(product: any) {
    return this.productService.optionSupplierSelected(product)

  }
}
