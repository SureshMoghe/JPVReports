import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBeneficiaryNewlyMilkPouringFarmersListComponent } from './farmer-beneficiary-newly-milk-pouring-farmers-list.component';

describe('FarmerBeneficiaryNewlyMilkPouringFarmersListComponent', () => {
  let component: FarmerBeneficiaryNewlyMilkPouringFarmersListComponent;
  let fixture: ComponentFixture<FarmerBeneficiaryNewlyMilkPouringFarmersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBeneficiaryNewlyMilkPouringFarmersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBeneficiaryNewlyMilkPouringFarmersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
