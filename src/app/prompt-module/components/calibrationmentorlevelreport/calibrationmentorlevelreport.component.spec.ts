import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationmentorlevelreportComponent } from './calibrationmentorlevelreport.component';

describe('CalibrationmentorlevelreportComponent', () => {
  let component: CalibrationmentorlevelreportComponent;
  let fixture: ComponentFixture<CalibrationmentorlevelreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationmentorlevelreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationmentorlevelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
