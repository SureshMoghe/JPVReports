import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitStateBankReportComponent } from './farmer-nature-of-unit-state-bank-report.component';

describe('FarmerNatureOfUnitStateBankReportComponent', () => {
  let component: FarmerNatureOfUnitStateBankReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitStateBankReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitStateBankReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitStateBankReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
