import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWomenFarmerRegDistrictDetailsComponent } from './dashboard-women-farmer-reg-district-details.component';

describe('DashboardWomenFarmerRegDistrictDetailsComponent', () => {
  let component: DashboardWomenFarmerRegDistrictDetailsComponent;
  let fixture: ComponentFixture<DashboardWomenFarmerRegDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWomenFarmerRegDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWomenFarmerRegDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
