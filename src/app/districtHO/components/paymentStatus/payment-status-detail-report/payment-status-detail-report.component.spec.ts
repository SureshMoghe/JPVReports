import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusDetailReportComponent } from './payment-status-detail-report.component';

describe('PaymentStatusDetailReportComponent', () => {
  let component: PaymentStatusDetailReportComponent;
  let fixture: ComponentFixture<PaymentStatusDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
