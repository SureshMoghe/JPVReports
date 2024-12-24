import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSchemeDistrictReportComponent } from './farmer-scheme-district-report.component';

describe('FarmerSchemeDistrictReportComponent', () => {
  let component: FarmerSchemeDistrictReportComponent;
  let fixture: ComponentFixture<FarmerSchemeDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerSchemeDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSchemeDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
