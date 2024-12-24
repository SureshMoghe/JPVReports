import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentDistrictReportComponent } from './land-allotment-district-report.component';

describe('LandAllotmentDistrictReportComponent', () => {
  let component: LandAllotmentDistrictReportComponent;
  let fixture: ComponentFixture<LandAllotmentDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
