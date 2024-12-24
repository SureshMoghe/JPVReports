import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationMentorLevelReportComponent } from './calibration-mentor-level-report.component';

describe('CalibrationMentorLevelReportComponent', () => {
  let component: CalibrationMentorLevelReportComponent;
  let fixture: ComponentFixture<CalibrationMentorLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationMentorLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationMentorLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
