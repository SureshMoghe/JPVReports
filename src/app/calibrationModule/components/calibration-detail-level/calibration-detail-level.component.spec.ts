import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationDetailLevelComponent } from './calibration-detail-level.component';

describe('CalibrationDetailLevelComponent', () => {
  let component: CalibrationDetailLevelComponent;
  let fixture: ComponentFixture<CalibrationDetailLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationDetailLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationDetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
