import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {BehaviorSubject, catchError, combineLatest, EMPTY, map, Observable, shareReplay, throwError} from 'rxjs';
import {CategoryService} from "./category.service";
import {SupplierService} from "./supplier.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore,
              private categoryService: CategoryService,
              private supplierService: SupplierService) {
  }

  getProductCollection(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }

  addProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.firestore.collection('products')
        .add(product)
        .then(ref => {
          product.id = ref.id;
          this.firestore.collection('products')
            .doc(ref.id).update({id: ref.id})
            .then(() => {
              resolve()
            }).catch(error => {
            reject(error);
          });
        }).catch(error => {
        reject(error);
      });
    });
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


  // Observable for retrieving products from the mock API
  products$ = this.getProductCollection()
  // Observables for category and supplier data from their respective services
  categories$ = this.categoryService.getCategoryCollection()
  suppliers$ = this.supplierService.getSupplierCollection()

  // Private variables for product data and filtered product subject
  private products: Product[] = [];

  private productsFilteredSubject = new BehaviorSubject<Product[]>(this.products);
  productsFiltered$ = this.productsFilteredSubject.asObservable();

  // Method to handle selecting a supplier
  optionSupplierSelected(selectedSupplierId: number) {
    this.supplierSelectedSubject.next(0);
    this.categorySelectedSubject.next(0);
    this.supplierSelectedSubject.next(+selectedSupplierId); // emit the selected supplier id
  }

  // Subject and Observable for selected supplier
  public supplierSelectedSubject = new BehaviorSubject<number>(0);
  supplierSelectedAction$ = this.supplierSelectedSubject.asObservable();

  // Combining products and selected supplier to filter products by supplier
  supplierActionStream$ = combineLatest([
    this.products$,
    this.supplierSelectedAction$,
  ]).pipe(
    map(([products, selectedSupplierId]) =>
      products.filter((product) =>
        selectedSupplierId ? product.supplierId == selectedSupplierId : true
      )
    ),
    catchError((err) => {
      return EMPTY;
    })
  );

  // Method to handle changing the selected category
  optionCategorySelected(selectedCategoryId: number) {
    this.supplierSelectedSubject.next(0);
    this.categorySelectedSubject.next(0);
    this.categorySelectedSubject.next(+selectedCategoryId);
  }

  // Subject and Observable for selected category
  public categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  // Combining supplier-filtered products and selected category to filter products by category
  categoryActionStream$ = combineLatest([
    this.supplierActionStream$,
    this.categorySelectedAction$,
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter((product) =>
        selectedCategoryId ? product.categoryId == selectedCategoryId : true
      )
    ),
    catchError((err) => {
      return EMPTY;
    })
  );

  // Combining category-filtered products with additional information (supplier and category names)
  productsArrayFiltered$ = combineLatest([
    this.categoryActionStream$,
    this.suppliers$,
    this.categories$,
  ]).pipe(
    map(([products, suppliers, categories]) =>
      products.map(
        (product) =>
          ({
            ...product,
            categoryId: categories.find((c) => product.categoryId === c.id)?.['category_name'],
            supplierId: suppliers.find((c) => product.supplierId === c.id)?.['supplier_name'],
          } as unknown as Product)
      )
    ),
    shareReplay(1)
  );

  // Combining filtered products with suppliers and categories
  filteredProducts$ = combineLatest([
    this.productsArrayFiltered$,
    this.suppliers$,
    this.categories$,
  ]).pipe(
    map(([products, suppliers, categories]) => ({
      products,
      suppliers,
      categories,
    }))
  );

  getFilteredProductCollection() {
    return this.productsArrayFiltered$
  }
}
