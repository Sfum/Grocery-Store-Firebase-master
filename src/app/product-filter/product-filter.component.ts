import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ProductFilterDetailsComponent} from "./product-filter-details/product-filter-details.component";
import {ProductService} from "../services/product.service";
import {SupplierService} from "../services/supplier.service";
import {Observable} from "rxjs";
import {Supplier} from "../models/supplier";
import firebase from "firebase/compat";
import {Category} from "../models/category";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.sass'
})
export class ProductFilterComponent {

  filterField$: Observable<Supplier[]>
  filterCategoryField$: Observable<Category[]>

  constructor(private productService: ProductService,
              private supplierService: SupplierService,
              private categoryService: CategoryService) {
    this.filterField$ = this.supplierService.getSupplierCollection()
    this.filterCategoryField$ = this.categoryService.getCategoryCollection()
  }

  optionSupplierSelected(product: any) {
    return this.productService.optionSupplierSelected(product)

  }
  optionCategorySelected(product: any) {
    return this.productService.optionCategorySelected(product)

  }
}
