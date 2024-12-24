import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationstatelevelreportComponent } from './calibrationstatelevelreport.component';

describe('CalibrationstatelevelreportComponent', () => {
  let component: CalibrationstatelevelreportComponent;
  let fixture: ComponentFixture<CalibrationstatelevelreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationstatelevelreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationstatelevelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
