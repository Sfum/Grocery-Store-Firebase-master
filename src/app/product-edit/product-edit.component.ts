import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  // @ts-ignore
  productId: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      seqNo: [null, Validators.required],
      supplierId: [null, Validators.required],
      product_image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProduct(this.productId).subscribe(
      (product) => {
        if (product) {
          // Update the form values with the retrieved product data
          this.productForm.patchValue(product);
        } else {
          console.error('Product not found');
        }
      },
      (error) => {
        console.error('Error retrieving product: ', error);
      }
    );
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
        () => {
          console.log('Product updated successfully.');
          // Handle success, maybe redirect to the product details page
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error updating product: ', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
