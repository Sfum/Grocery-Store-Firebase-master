import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private firestore: AngularFirestore) {}

  getSupplierCollection(): Observable<any[]> {
    return this.firestore.collection('supplier').valueChanges();
  }

  addSupplier(supplier: Supplier): Promise<any> {
    return this.firestore.collection('supplier').add(supplier);
  }

  getSupplier(supplierId: string): Observable<Supplier | undefined> {
    const supplierRef = this.firestore.collection('supplier').doc<Supplier>(supplierId);

    return supplierRef.valueChanges().pipe(
      catchError((error) => {
        console.error('Error getting supplier: ', error);
        return throwError('Something went wrong while fetching the supplier');
      })
    );
  }

  updateSupplier(supplierId: string, supplier: Supplier): Observable<void> {
    return new Observable((observer) => {
      this.firestore.collection('supplier').doc(supplierId).update(supplier)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error updating supplier: ', error);
          observer.error('Something went wrong while updating the supplier');
        });
    });
  }
}
