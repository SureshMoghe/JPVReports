import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingCalibrationComponent } from './village-meeting-calibration.component';

describe('VillageMeetingCalibrationComponent', () => {
  let component: VillageMeetingCalibrationComponent;
  let fixture: ComponentFixture<VillageMeetingCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingCalibrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
