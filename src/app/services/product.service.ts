import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {}

  getProductCollection(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }
}
