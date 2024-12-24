import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankRbkReportComponent } from './ldm-bank-rbk-report.component';

describe('LdmBankRbkReportComponent', () => {
  let component: LdmBankRbkReportComponent;
  let fixture: ComponentFixture<LdmBankRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
