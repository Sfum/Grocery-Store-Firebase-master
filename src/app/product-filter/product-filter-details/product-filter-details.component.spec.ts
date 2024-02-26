import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterDetailsComponent } from './product-filter-details.component';

describe('ProductFilterDetailsComponent', () => {
  let component: ProductFilterDetailsComponent;
  let fixture: ComponentFixture<ProductFilterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFilterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
