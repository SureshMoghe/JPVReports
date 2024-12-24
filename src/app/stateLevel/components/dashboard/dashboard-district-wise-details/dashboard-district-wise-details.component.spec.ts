import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDistrictWiseDetailsComponent } from './dashboard-district-wise-details.component';

describe('DashboardDistrictWiseDetailsComponent', () => {
  let component: DashboardDistrictWiseDetailsComponent;
  let fixture: ComponentFixture<DashboardDistrictWiseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDistrictWiseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDistrictWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
