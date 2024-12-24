import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyMonitoringReportComponent } from './society-monitoring-report.component';

describe('SocietyMonitoringReportComponent', () => {
  let component: SocietyMonitoringReportComponent;
  let fixture: ComponentFixture<SocietyMonitoringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyMonitoringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyMonitoringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
