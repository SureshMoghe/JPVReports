import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionRbkReportComponent } from './building-inspection-rbk-report.component';

describe('BuildingInspectionRbkReportComponent', () => {
  let component: BuildingInspectionRbkReportComponent;
  let fixture: ComponentFixture<BuildingInspectionRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
