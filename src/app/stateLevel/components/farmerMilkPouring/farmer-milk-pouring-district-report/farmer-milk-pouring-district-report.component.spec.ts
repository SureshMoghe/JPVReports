import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringDistrictReportComponent } from './farmer-milk-pouring-district-report.component';

describe('FarmerMilkPouringDistrictReportComponent', () => {
  let component: FarmerMilkPouringDistrictReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
