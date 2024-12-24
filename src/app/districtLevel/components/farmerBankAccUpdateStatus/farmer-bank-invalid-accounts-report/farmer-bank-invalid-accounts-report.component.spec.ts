import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankInvalidAccountsReportComponent } from './farmer-bank-invalid-accounts-report.component';

describe('FarmerBankInvalidAccountsReportComponent', () => {
  let component: FarmerBankInvalidAccountsReportComponent;
  let fixture: ComponentFixture<FarmerBankInvalidAccountsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankInvalidAccountsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankInvalidAccountsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
