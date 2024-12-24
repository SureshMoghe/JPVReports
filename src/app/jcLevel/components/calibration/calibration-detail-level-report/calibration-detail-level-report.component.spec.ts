import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationDetailLevelReportComponent } from './calibration-detail-level-report.component';

describe('CalibrationDetailLevelReportComponent', () => {
  let component: CalibrationDetailLevelReportComponent;
  let fixture: ComponentFixture<CalibrationDetailLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationDetailLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationDetailLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
