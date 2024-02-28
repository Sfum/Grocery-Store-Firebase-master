import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSuccessComponent } from './shopping-cart-success.component';

describe('ShoppingCartSuccessComponent', () => {
  let component: ShoppingCartSuccessComponent;
  let fixture: ComponentFixture<ShoppingCartSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
