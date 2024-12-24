import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayNoOfWomenFarmerMilkPouringDistrictReportComponent } from './today-no-of-women-farmer-milk-pouring-district-report.component';

describe('TodayNoOfWomenFarmerMilkPouringDistrictReportComponent', () => {
  let component: TodayNoOfWomenFarmerMilkPouringDistrictReportComponent;
  let fixture: ComponentFixture<TodayNoOfWomenFarmerMilkPouringDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayNoOfWomenFarmerMilkPouringDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayNoOfWomenFarmerMilkPouringDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
