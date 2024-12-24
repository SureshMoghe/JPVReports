import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusMandalReportComponent } from './payment-status-mandal-report.component';

describe('PaymentStatusMandalReportComponent', () => {
  let component: PaymentStatusMandalReportComponent;
  let fixture: ComponentFixture<PaymentStatusMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
