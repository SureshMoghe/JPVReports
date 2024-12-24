import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitDistrictLoginReportComponent } from './farmer-nature-of-unit-district-login-report.component';

describe('FarmerNatureOfUnitDistrictLoginReportComponent', () => {
  let component: FarmerNatureOfUnitDistrictLoginReportComponent;
  let fixture: ComponentFixture<FarmerNatureOfUnitDistrictLoginReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNatureOfUnitDistrictLoginReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerNatureOfUnitDistrictLoginReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
