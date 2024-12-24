import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationRbkLevelReportComponent } from './calibration-rbk-level-report.component';

describe('CalibrationRbkLevelReportComponent', () => {
  let component: CalibrationRbkLevelReportComponent;
  let fixture: ComponentFixture<CalibrationRbkLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationRbkLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationRbkLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
