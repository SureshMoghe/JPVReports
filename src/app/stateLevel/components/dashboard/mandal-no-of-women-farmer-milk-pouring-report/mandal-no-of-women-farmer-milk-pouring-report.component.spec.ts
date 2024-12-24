import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalNoOfWomenFarmerMilkPouringReportComponent } from './mandal-no-of-women-farmer-milk-pouring-report.component';

describe('MandalNoOfWomenFarmerMilkPouringReportComponent', () => {
  let component: MandalNoOfWomenFarmerMilkPouringReportComponent;
  let fixture: ComponentFixture<MandalNoOfWomenFarmerMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandalNoOfWomenFarmerMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalNoOfWomenFarmerMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
