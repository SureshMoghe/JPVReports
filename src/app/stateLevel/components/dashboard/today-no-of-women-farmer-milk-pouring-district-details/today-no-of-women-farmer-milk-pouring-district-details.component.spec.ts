import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent } from './today-no-of-women-farmer-milk-pouring-district-details.component';

describe('TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent', () => {
  let component: TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent;
  let fixture: ComponentFixture<TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayNoOfWomenFarmerMilkPouringDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
