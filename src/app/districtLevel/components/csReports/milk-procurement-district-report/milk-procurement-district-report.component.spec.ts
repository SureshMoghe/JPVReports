import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkProcurementDistrictReportComponent } from './milk-procurement-district-report.component';

describe('MilkProcurementDistrictReportComponent', () => {
  let component: MilkProcurementDistrictReportComponent;
  let fixture: ComponentFixture<MilkProcurementDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkProcurementDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkProcurementDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
