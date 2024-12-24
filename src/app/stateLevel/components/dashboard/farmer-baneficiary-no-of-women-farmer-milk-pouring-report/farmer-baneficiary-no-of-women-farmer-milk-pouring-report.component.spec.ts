import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent } from './farmer-baneficiary-no-of-women-farmer-milk-pouring-report.component';

describe('FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent', () => {
  let component: FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent;
  let fixture: ComponentFixture<FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBaneficiaryNoOfWomenFarmerMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
