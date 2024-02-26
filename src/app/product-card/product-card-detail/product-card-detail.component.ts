import {Component, Input} from '@angular/core';
import {Product} from "../../models/product";
import {Supplier} from "../../models/supplier";

@Component({
  selector: 'app-product-card-detail',
  templateUrl: './product-card-detail.component.html',
  styleUrls: ['./product-card-detail.component.sass']
})
export class ProductCardDetailComponent {

  @Input() product!: Product
  @Input() supplier!: Supplier



}
