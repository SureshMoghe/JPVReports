import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccMandalReportComponent } from './mpuac-bank-acc-mandal-report.component';

describe('MpuacBankAccMandalReportComponent', () => {
  let component: MpuacBankAccMandalReportComponent;
  let fixture: ComponentFixture<MpuacBankAccMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
