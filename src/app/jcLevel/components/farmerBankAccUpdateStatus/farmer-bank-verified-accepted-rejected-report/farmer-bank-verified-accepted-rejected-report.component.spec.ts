import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankVerifiedAcceptedRejectedReportComponent } from './farmer-bank-verified-accepted-rejected-report.component';

describe('FarmerBankVerifiedAcceptedRejectedReportComponent', () => {
  let component: FarmerBankVerifiedAcceptedRejectedReportComponent;
  let fixture: ComponentFixture<FarmerBankVerifiedAcceptedRejectedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankVerifiedAcceptedRejectedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankVerifiedAcceptedRejectedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
