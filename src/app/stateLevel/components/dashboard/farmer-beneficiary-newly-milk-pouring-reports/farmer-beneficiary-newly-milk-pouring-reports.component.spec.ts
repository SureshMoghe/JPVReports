import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBeneficiaryNewlyMilkPouringReportsComponent } from './farmer-beneficiary-newly-milk-pouring-reports.component';

describe('FarmerBeneficiaryNewlyMilkPouringReportsComponent', () => {
  let component: FarmerBeneficiaryNewlyMilkPouringReportsComponent;
  let fixture: ComponentFixture<FarmerBeneficiaryNewlyMilkPouringReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBeneficiaryNewlyMilkPouringReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBeneficiaryNewlyMilkPouringReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
