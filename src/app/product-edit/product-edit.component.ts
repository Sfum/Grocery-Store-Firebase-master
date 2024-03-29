import {Component,OnInit} from '@angular/core';
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

  selectedSupplierId: number | undefined;
  selectedCategoryId: number | undefined;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.productForm = this.fb.group({
      productId: ['', Validators.required],
      product_name: ['', Validators.required],
      product_description: ['', Validators.required],
      seqNo: ['', Validators.required],
      supplierId: ['', Validators.required],
      categoryId: ['', Validators.required],
      product_image: ['', Validators.required],
      quantity: ['', Validators.required],

    });
  }

  productEdit$ = this.productService.filteredProducts$

  ngOnInit(): void {
    // @ts-ignore
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  optionSupplierSelected(selectedSupplierId: number) {
    return this.productService.optionSupplierSelected(selectedSupplierId);
  }

  optionCategorySelected(selectedCategoryId: number) {
    return this.productService.optionCategorySelected(selectedCategoryId);
  }

  loadProduct() {
    this.productService.getProduct(this.productId).subscribe(
      (product) => {
        if (product) {
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
