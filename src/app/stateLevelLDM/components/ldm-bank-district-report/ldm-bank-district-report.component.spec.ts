import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankDistrictReportComponent } from './ldm-bank-district-report.component';

describe('LdmBankDistrictReportComponent', () => {
  let component: LdmBankDistrictReportComponent;
  let fixture: ComponentFixture<LdmBankDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
