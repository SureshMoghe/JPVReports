import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMonitoringDistrictReportComponent } from './farmer-monitoring-district-report.component';

describe('FarmerMonitoringDistrictReportComponent', () => {
  let component: FarmerMonitoringDistrictReportComponent;
  let fixture: ComponentFixture<FarmerMonitoringDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMonitoringDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMonitoringDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
