import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusRbkComponent } from './payment-status-rbk.component';

describe('PaymentStatusRbkComponent', () => {
  let component: PaymentStatusRbkComponent;
  let fixture: ComponentFixture<PaymentStatusRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
