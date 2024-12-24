import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionAndGroundingReportComponent } from './loan-sanction-and-grounding-report.component';

describe('LoanSanctionAndGroundingReportComponent', () => {
  let component: LoanSanctionAndGroundingReportComponent;
  let fixture: ComponentFixture<LoanSanctionAndGroundingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSanctionAndGroundingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSanctionAndGroundingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
