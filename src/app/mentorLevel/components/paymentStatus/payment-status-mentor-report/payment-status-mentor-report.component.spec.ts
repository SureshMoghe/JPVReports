import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusMentorReportComponent } from './payment-status-mentor-report.component';

describe('PaymentStatusMentorReportComponent', () => {
  let component: PaymentStatusMentorReportComponent;
  let fixture: ComponentFixture<PaymentStatusMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
