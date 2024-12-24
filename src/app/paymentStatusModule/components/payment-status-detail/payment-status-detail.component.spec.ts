import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusDetailComponent } from './payment-status-detail.component';

describe('PaymentStatusDetailComponent', () => {
  let component: PaymentStatusDetailComponent;
  let fixture: ComponentFixture<PaymentStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
