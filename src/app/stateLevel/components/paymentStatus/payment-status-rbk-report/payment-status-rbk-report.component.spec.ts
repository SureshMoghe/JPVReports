import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusRbkReportComponent } from './payment-status-rbk-report.component';

describe('PaymentStatusRbkReportComponent', () => {
  let component: PaymentStatusRbkReportComponent;
  let fixture: ComponentFixture<PaymentStatusRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
