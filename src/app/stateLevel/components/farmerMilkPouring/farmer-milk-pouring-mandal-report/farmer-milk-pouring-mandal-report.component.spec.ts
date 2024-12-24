import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMilkPouringMandalReportComponent } from './farmer-milk-pouring-mandal-report.component';

describe('FarmerMilkPouringMandalReportComponent', () => {
  let component: FarmerMilkPouringMandalReportComponent;
  let fixture: ComponentFixture<FarmerMilkPouringMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMilkPouringMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMilkPouringMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
