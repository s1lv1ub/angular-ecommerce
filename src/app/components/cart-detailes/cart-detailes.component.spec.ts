import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailesComponent } from './cart-detailes.component';

describe('CartDetailesComponent', () => {
  let component: CartDetailesComponent;
  let fixture: ComponentFixture<CartDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartDetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
