import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingCalibrationReportComponent } from './village-meeting-calibration-report.component';

describe('VillageMeetingCalibrationReportComponent', () => {
  let component: VillageMeetingCalibrationReportComponent;
  let fixture: ComponentFixture<VillageMeetingCalibrationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingCalibrationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingCalibrationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
