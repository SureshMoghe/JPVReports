import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTotalMilkPouringDistrictwiseReportComponent } from './dashboard-total-milk-pouring-districtwise-report.component';

describe('DashboardTotalMilkPouringDistrictwiseReportComponent', () => {
  let component: DashboardTotalMilkPouringDistrictwiseReportComponent;
  let fixture: ComponentFixture<DashboardTotalMilkPouringDistrictwiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTotalMilkPouringDistrictwiseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTotalMilkPouringDistrictwiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
