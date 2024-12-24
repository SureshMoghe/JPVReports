import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBKNoOfWomenFarmerMilkPouringReportComponent } from './rbkno-of-women-farmer-milk-pouring-report.component';

describe('RBKNoOfWomenFarmerMilkPouringReportComponent', () => {
  let component: RBKNoOfWomenFarmerMilkPouringReportComponent;
  let fixture: ComponentFixture<RBKNoOfWomenFarmerMilkPouringReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBKNoOfWomenFarmerMilkPouringReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBKNoOfWomenFarmerMilkPouringReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
