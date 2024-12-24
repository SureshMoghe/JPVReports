import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankBranchReportComponent } from './farmer-nature-of-unit-bank-branch-report.component';

describe('FarmerNatureOfUnitBankBranchReportComponent', () => {
  let component: FarmerNatureOfUnitBankBranchReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankBranchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankBranchReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankBranchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
