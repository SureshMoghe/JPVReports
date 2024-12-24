import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusMentorComponent } from './payment-status-mentor.component';

describe('PaymentStatusMentorComponent', () => {
  let component: PaymentStatusMentorComponent;
  let fixture: ComponentFixture<PaymentStatusMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
