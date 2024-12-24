import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitBankDetailReportComponent } from './farmer-nature-of-unit-bank-detail-report.component';

describe('FarmerNatureOfUnitBankDetailReportComponent', () => {
  let component: FarmerNatureOfUnitBankDetailReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitBankDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitBankDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitBankDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
