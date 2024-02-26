import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {SupplierService} from "../services/supplier.service";
import {Supplier} from "../models/supplier";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  productCollection$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productCollection$ = this.productService.productsArrayFiltered$
  }
}
