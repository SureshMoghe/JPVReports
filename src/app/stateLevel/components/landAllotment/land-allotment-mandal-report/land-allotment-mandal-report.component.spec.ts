import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentMandalReportComponent } from './land-allotment-mandal-report.component';

describe('LandAllotmentMandalReportComponent', () => {
  let component: LandAllotmentMandalReportComponent;
  let fixture: ComponentFixture<LandAllotmentMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
