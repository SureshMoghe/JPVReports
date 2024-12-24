import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSanctionandGroundingReportComponent } from './loan-sanctionand-grounding-report.component';

describe('LoanSanctionandGroundingReportComponent', () => {
  let component: LoanSanctionandGroundingReportComponent;
  let fixture: ComponentFixture<LoanSanctionandGroundingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSanctionandGroundingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSanctionandGroundingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
