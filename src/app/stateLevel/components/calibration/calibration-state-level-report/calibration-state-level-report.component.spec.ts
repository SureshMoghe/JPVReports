import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationStateLevelReportComponent } from './calibration-state-level-report.component';

describe('CalibrationStateLevelReportComponent', () => {
  let component: CalibrationStateLevelReportComponent;
  let fixture: ComponentFixture<CalibrationStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
