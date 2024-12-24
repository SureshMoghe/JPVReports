import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDistrictWiseReportComponent } from './dashboard-district-wise-report.component';

describe('DashboardDistrictWiseReportComponent', () => {
  let component: DashboardDistrictWiseReportComponent;
  let fixture: ComponentFixture<DashboardDistrictWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDistrictWiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDistrictWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
