import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = [
    'productId',
    'product_name',
    'product_description',
    'seqNo',
    'supplierId'
  ];
  // @ts-ignore
  dataSource: MatTableDataSource<Product>;
  products: Product[] = [];

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductCollection().subscribe((products) => {
      this.products = products;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
    });
  }
}
