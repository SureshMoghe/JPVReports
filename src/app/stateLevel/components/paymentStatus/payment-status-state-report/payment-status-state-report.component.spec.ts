import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusStateReportComponent } from './payment-status-state-report.component';

describe('PaymentStatusStateReportComponent', () => {
  let component: PaymentStatusStateReportComponent;
  let fixture: ComponentFixture<PaymentStatusStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
