import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.sass']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  productId: string | undefined;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private afs: AngularFirestore) {
    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      seqNo: [null, Validators.required],
      supplierId: [null, Validators.required],
      product_image: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.productId = this.afs.createId()
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
