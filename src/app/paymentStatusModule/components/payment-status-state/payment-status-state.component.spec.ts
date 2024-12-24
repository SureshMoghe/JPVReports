import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusStateComponent } from './payment-status-state.component';

describe('PaymentStatusStateComponent', () => {
  let component: PaymentStatusStateComponent;
  let fixture: ComponentFixture<PaymentStatusStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
