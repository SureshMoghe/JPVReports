import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingCalibrationComponent } from './villagemeeting-calibration.component';

describe('VillagemeetingCalibrationComponent', () => {
  let component: VillagemeetingCalibrationComponent;
  let fixture: ComponentFixture<VillagemeetingCalibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingCalibrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingCalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
