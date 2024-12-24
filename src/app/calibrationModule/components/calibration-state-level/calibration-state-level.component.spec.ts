import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationStateLevelComponent } from './calibration-state-level.component';

describe('CalibrationStateLevelComponent', () => {
  let component: CalibrationStateLevelComponent;
  let fixture: ComponentFixture<CalibrationStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
