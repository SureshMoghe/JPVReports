import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionStateReportComponent } from './building-inspection-state-report.component';

describe('BuildingInspectionStateReportComponent', () => {
  let component: BuildingInspectionStateReportComponent;
  let fixture: ComponentFixture<BuildingInspectionStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
