import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionMentorReportComponent } from './amcu-inspection-mentor-report.component';

describe('AmcuInspectionMentorReportComponent', () => {
  let component: AmcuInspectionMentorReportComponent;
  let fixture: ComponentFixture<AmcuInspectionMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
