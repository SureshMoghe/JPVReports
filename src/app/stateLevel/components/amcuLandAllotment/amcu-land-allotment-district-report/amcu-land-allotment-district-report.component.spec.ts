import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentDistrictReportComponent } from './amcu-land-allotment-district-report.component';

describe('AmcuLandAllotmentDistrictReportComponent', () => {
  let component: AmcuLandAllotmentDistrictReportComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
