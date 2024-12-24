import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationRbkLevelComponent } from './calibration-rbk-level.component';

describe('CalibrationRbkLevelComponent', () => {
  let component: CalibrationRbkLevelComponent;
  let fixture: ComponentFixture<CalibrationRbkLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationRbkLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationRbkLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
