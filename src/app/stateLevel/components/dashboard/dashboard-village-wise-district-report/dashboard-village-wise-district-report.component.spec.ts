import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVillageWiseDistrictReportComponent } from './dashboard-village-wise-district-report.component';

describe('DashboardVillageWiseDistrictReportComponent', () => {
  let component: DashboardVillageWiseDistrictReportComponent;
  let fixture: ComponentFixture<DashboardVillageWiseDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVillageWiseDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVillageWiseDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
