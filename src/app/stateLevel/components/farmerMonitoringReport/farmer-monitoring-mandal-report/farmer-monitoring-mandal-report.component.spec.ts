import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMonitoringMandalReportComponent } from './farmer-monitoring-mandal-report.component';

describe('FarmerMonitoringMandalReportComponent', () => {
  let component: FarmerMonitoringMandalReportComponent;
  let fixture: ComponentFixture<FarmerMonitoringMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMonitoringMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMonitoringMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
