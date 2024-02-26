import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: AngularFirestore) {}

  getCategoryCollection(): Observable<any[]> {
    return this.firestore.collection('category').valueChanges();
  }

  addCategory(category: Category): Promise<any> {
    return this.firestore.collection('category').add(category);
  }

  getCategory(categoryId: string): Observable<Category | undefined> {
    const categoryRef = this.firestore.collection('category').doc<Category>(categoryId);

    return categoryRef.valueChanges().pipe(
      catchError((error) => {
        console.error('Error getting category: ', error);
        return throwError('Something went wrong while fetching the category');
      })
    );
  }

  updateCategory(categoryId: string, category: Category): Observable<void> {
    return new Observable((observer) => {
      this.firestore.collection('category').doc(categoryId).update(category)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          console.error('Error updating category: ', error);
          observer.error('Something went wrong while updating the category');
        });
    });
  }
}
