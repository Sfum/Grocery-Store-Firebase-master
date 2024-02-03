import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  getProductCollection(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }

  addProduct(product: Product): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  getProduct(productId: string): Observable<Product | undefined> {
    const productRef = this.firestore.collection('products').doc<Product>(productId);

    return productRef.valueChanges().pipe(
      catchError((error) => {
        console.error('Error getting product: ', error);
        return throwError('Something went wrong while fetching the product');
      })
    );
  }

  updateProduct(productId: string, product: Product): Observable<void> {
    return new Observable((observer) => {
      this.firestore.collection('products').doc(productId).update(product)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error updating product: ', error);
          observer.error('Something went wrong while updating the product');
        });
    });
  }
}
