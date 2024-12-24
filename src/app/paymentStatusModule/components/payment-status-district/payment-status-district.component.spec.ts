import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusDistrictComponent } from './payment-status-district.component';

describe('PaymentStatusDistrictComponent', () => {
  let component: PaymentStatusDistrictComponent;
  let fixture: ComponentFixture<PaymentStatusDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
