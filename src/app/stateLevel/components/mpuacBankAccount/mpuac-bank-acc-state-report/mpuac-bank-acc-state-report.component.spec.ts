import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccStateReportComponent } from './mpuac-bank-acc-state-report.component';

describe('MpuacBankAccStateReportComponent', () => {
  let component: MpuacBankAccStateReportComponent;
  let fixture: ComponentFixture<MpuacBankAccStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
