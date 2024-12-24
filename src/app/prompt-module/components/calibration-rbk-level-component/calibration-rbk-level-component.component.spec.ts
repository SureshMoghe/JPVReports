import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationRbkLevelComponentComponent } from './calibration-rbk-level-component.component';

describe('CalibrationRbkLevelComponentComponent', () => {
  let component: CalibrationRbkLevelComponentComponent;
  let fixture: ComponentFixture<CalibrationRbkLevelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationRbkLevelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationRbkLevelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
