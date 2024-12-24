import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionsAndGroundingReportComponent } from './loan-sanctions-and-grounding-report.component';

describe('LoanSanctionsAndGroundingReportComponent', () => {
  let component: LoanSanctionsAndGroundingReportComponent;
  let fixture: ComponentFixture<LoanSanctionsAndGroundingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSanctionsAndGroundingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSanctionsAndGroundingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
