import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionDetailReportComponent } from './building-inspection-detail-report.component';

describe('BuildingInspectionDetailReportComponent', () => {
  let component: BuildingInspectionDetailReportComponent;
  let fixture: ComponentFixture<BuildingInspectionDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
