import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent } from './state-total-cheyutha-beneficiaries-groundedwithanimalscount.component';

describe('StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent', () => {
  let component: StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent;
  let fixture: ComponentFixture<StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTotalCheyuthaBeneficiariesGroundedwithanimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
