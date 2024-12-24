import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDistrictBankReportComponent } from './farmer-nature-of-unit-district-bank-report.component';

describe('FarmerNatureOfUnitDistrictBankReportComponent', () => {
  let component: FarmerNatureOfUnitDistrictBankReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDistrictBankReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDistrictBankReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDistrictBankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
