import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVillageWiseDistrictDetailsComponent } from './dashboard-village-wise-district-details.component';

describe('DashboardVillageWiseDistrictDetailsComponent', () => {
  let component: DashboardVillageWiseDistrictDetailsComponent;
  let fixture: ComponentFixture<DashboardVillageWiseDistrictDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVillageWiseDistrictDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardVillageWiseDistrictDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
