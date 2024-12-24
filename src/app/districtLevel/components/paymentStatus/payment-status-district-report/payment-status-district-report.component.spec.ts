import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusDistrictReportComponent } from './payment-status-district-report.component';

describe('PaymentStatusDistrictReportComponent', () => {
  let component: PaymentStatusDistrictReportComponent;
  let fixture: ComponentFixture<PaymentStatusDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
