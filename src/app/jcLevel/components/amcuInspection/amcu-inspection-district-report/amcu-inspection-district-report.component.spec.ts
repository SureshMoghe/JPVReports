import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionDistrictReportComponent } from './amcu-inspection-district-report.component';

describe('AmcuInspectionDistrictReportComponent', () => {
  let component: AmcuInspectionDistrictReportComponent;
  let fixture: ComponentFixture<AmcuInspectionDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
