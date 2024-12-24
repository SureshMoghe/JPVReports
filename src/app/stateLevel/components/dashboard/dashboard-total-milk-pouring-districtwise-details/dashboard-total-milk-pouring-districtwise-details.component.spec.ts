import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTotalMilkPouringDistrictwiseDetailsComponent } from './dashboard-total-milk-pouring-districtwise-details.component';

describe('DashboardTotalMilkPouringDistrictwiseDetailsComponent', () => {
  let component: DashboardTotalMilkPouringDistrictwiseDetailsComponent;
  let fixture: ComponentFixture<DashboardTotalMilkPouringDistrictwiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTotalMilkPouringDistrictwiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTotalMilkPouringDistrictwiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
