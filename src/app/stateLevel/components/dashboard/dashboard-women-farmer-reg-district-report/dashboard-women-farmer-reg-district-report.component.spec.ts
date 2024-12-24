import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWomenFarmerRegDistrictReportComponent } from './dashboard-women-farmer-reg-district-report.component';

describe('DashboardWomenFarmerRegDistrictReportComponent', () => {
  let component: DashboardWomenFarmerRegDistrictReportComponent;
  let fixture: ComponentFixture<DashboardWomenFarmerRegDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWomenFarmerRegDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWomenFarmerRegDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
