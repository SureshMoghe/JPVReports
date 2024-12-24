import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent } from './dccb-total-cheyutha-beneficiaries-groundedwithanimalscount.component';

describe('DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent', () => {
  let component: DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent;
  let fixture: ComponentFixture<DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
