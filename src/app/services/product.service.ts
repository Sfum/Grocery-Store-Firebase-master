import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {catchError, from, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  getProductCollection(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }

  addProduct(product: Product) {
    return this.firestore.collection('products').add(product);
  }
  getProduct(productId: string): Observable<Product | undefined> {
    return this.firestore
      .collection('products')
      .doc<Product>(productId)
      .valueChanges()
      .pipe(
        catchError((error) => {
          console.error('Error getting product: ', error);
          return throwError('Something went wrong while fetching the product');
        })
      );
  }

  updateProduct(productId: string, product: Product): Observable<void> {
    return from(this.firestore.collection('products').doc(productId).update(product)).pipe(
      catchError((error) => {
        console.error('Error updating product: ', error);
        return throwError('Something went wrong while updating the product');
      })
    );
  }
}
