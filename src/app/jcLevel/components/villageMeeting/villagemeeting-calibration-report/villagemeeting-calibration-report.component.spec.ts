import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingCalibrationReportComponent } from './villagemeeting-calibration-report.component';

describe('VillagemeetingCalibrationReportComponent', () => {
  let component: VillagemeetingCalibrationReportComponent;
  let fixture: ComponentFixture<VillagemeetingCalibrationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingCalibrationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingCalibrationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
