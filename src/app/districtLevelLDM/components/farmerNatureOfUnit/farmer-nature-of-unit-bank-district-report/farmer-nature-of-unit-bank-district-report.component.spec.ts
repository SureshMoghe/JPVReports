import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankDistrictReportComponent } from './farmer-nature-of-unit-bank-district-report.component';

describe('FarmerNatureOfUnitBankDistrictReportComponent', () => {
  let component: FarmerNatureOfUnitBankDistrictReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
