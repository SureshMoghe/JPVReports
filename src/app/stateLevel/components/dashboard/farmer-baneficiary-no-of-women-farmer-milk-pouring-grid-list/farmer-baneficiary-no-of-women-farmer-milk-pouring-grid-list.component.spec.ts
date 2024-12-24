import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent } from './farmer-baneficiary-no-of-women-farmer-milk-pouring-grid-list.component';

describe('FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent', () => {
  let component: FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent;
  let fixture: ComponentFixture<FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBaneficiaryNoOfWomenFarmerMilkPouringGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
