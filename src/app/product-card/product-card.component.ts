import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  productCollection$!: Observable<Product[]>;

  constructor(private firestoreService: ProductService) {}

  ngOnInit() {
    this.productCollection$ = this.firestoreService.getProductCollection();
  }
}
