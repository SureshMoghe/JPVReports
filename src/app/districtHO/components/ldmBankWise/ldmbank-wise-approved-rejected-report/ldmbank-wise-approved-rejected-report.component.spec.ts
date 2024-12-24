import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmbankWiseApprovedRejectedReportComponent } from './ldmbank-wise-approved-rejected-report.component';

describe('LdmbankWiseApprovedRejectedReportComponent', () => {
  let component: LdmbankWiseApprovedRejectedReportComponent;
  let fixture: ComponentFixture<LdmbankWiseApprovedRejectedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmbankWiseApprovedRejectedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmbankWiseApprovedRejectedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
