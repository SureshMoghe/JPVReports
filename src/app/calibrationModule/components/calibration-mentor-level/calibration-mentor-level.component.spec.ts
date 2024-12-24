import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationMentorLevelComponent } from './calibration-mentor-level.component';

describe('CalibrationMentorLevelComponent', () => {
  let component: CalibrationMentorLevelComponent;
  let fixture: ComponentFixture<CalibrationMentorLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationMentorLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationMentorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
