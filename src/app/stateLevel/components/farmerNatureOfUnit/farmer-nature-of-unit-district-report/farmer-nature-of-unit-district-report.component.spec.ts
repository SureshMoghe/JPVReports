import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDistrictReportComponent } from './farmer-nature-of-unit-district-report.component';

describe('FarmerNatureOfUnitDistrictReportComponent', () => {
  let component: FarmerNatureOfUnitDistrictReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
