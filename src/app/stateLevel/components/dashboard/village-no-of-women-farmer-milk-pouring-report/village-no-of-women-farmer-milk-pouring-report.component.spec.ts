import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageNoOfWomenFarmerMilkPouringReportComponent } from './village-no-of-women-farmer-milk-pouring-report.component';

describe('VillageNoOfWomenFarmerMilkPouringReportComponent', () => {
  let component: VillageNoOfWomenFarmerMilkPouringReportComponent;
  let fixture: ComponentFixture<VillageNoOfWomenFarmerMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageNoOfWomenFarmerMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageNoOfWomenFarmerMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
