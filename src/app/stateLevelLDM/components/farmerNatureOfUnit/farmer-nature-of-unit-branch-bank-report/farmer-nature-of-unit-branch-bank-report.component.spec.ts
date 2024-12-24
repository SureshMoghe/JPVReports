import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBranchBankReportComponent } from './farmer-nature-of-unit-branch-bank-report.component';

describe('FarmerNatureOfUnitBranchBankReportComponent', () => {
  let component: FarmerNatureOfUnitBranchBankReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBranchBankReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBranchBankReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBranchBankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
