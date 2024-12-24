import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusMandalComponent } from './payment-status-mandal.component';

describe('PaymentStatusMandalComponent', () => {
  let component: PaymentStatusMandalComponent;
  let fixture: ComponentFixture<PaymentStatusMandalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusMandalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusMandalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
