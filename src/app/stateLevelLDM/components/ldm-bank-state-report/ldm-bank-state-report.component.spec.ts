import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdmBankStateReportComponent } from './ldm-bank-state-report.component';

describe('LdmBankStateReportComponent', () => {
  let component: LdmBankStateReportComponent;
  let fixture: ComponentFixture<LdmBankStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdmBankStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdmBankStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
