import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccRbkReportComponent } from './mpuac-bank-acc-rbk-report.component';

describe('MpuacBankAccRbkReportComponent', () => {
  let component: MpuacBankAccRbkReportComponent;
  let fixture: ComponentFixture<MpuacBankAccRbkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccRbkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccRbkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
