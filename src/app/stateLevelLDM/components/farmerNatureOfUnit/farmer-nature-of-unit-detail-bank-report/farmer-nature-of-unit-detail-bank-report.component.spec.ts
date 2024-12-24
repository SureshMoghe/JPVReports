import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDetailBankReportComponent } from './farmer-nature-of-unit-detail-bank-report.component';

describe('FarmerNatureOfUnitDetailBankReportComponent', () => {
  let component: FarmerNatureOfUnitDetailBankReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDetailBankReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDetailBankReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDetailBankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
