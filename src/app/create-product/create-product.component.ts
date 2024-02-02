import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      productId: [null, Validators.required],
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      seqNo: [null, Validators.required],
      supplierId: [null, Validators.required],
      product_image: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.addProduct(productData).then(() => {
        console.log('Product added successfully.');
        this.productForm.reset();
      })
        .catch(error => {
          console.error('Error adding product: ', error);
        });
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
