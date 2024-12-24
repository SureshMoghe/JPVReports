import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerLoanSanctionAndGroundingReportComponent } from './banker-loan-sanction-and-grounding-report.component';

describe('BankerLoanSanctionAndGroundingReportComponent', () => {
  let component: BankerLoanSanctionAndGroundingReportComponent;
  let fixture: ComponentFixture<BankerLoanSanctionAndGroundingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankerLoanSanctionAndGroundingReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerLoanSanctionAndGroundingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
