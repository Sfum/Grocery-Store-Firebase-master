import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatOption} from "@angular/material/autocomplete";
import {async, Observable} from "rxjs";
import {Supplier} from "../../models/supplier";
import {Router} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatSlider, MatSliderRangeThumb} from "@angular/material/slider";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import firebase from 'firebase/compat/app';
import {Category} from "../../models/category";
import {MatCheckbox} from "@angular/material/checkbox";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-filter-details',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatOption,
    MatFormField,
    MatSelect,
    FormsModule,
    MatSlider,
    MatSliderRangeThumb,
    NgIf,
    NgForOf,
    AsyncPipe,
    MatCheckbox
  ],
  templateUrl: './product-filter-details.component.html',
  styleUrl: './product-filter-details.component.sass'
})
export class ProductFilterDetailsComponent{

  user$: Observable<firebase.User>;


  @Input() filterField$?: Observable<Supplier[]>
  @Input() filterCategoryField$?: Observable<Category[]>

  @Output() supplierSelectedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() categorySelectedEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router) {
  }

  optionSupplierSelected(selectedSupplierId: number) {
    this.supplierSelectedEvent.emit(selectedSupplierId);
  }

  optionCategorySelected(selectedCategoryId: number) {
    this.categorySelectedEvent.emit(selectedCategoryId);
  }
}
