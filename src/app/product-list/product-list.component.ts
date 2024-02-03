import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['productId', 'product_name', 'product_description', 'seqNo', 'supplierId'];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductCollection().subscribe(products => {
      this.products = products;
    });
  }
}
