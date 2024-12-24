import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionMentorReportComponent } from './building-inspection-mentor-report.component';

describe('BuildingInspectionMentorReportComponent', () => {
  let component: BuildingInspectionMentorReportComponent;
  let fixture: ComponentFixture<BuildingInspectionMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
