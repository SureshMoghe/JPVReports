import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccDetailReportComponent } from './mpuac-bank-acc-detail-report.component';

describe('MpuacBankAccDetailReportComponent', () => {
  let component: MpuacBankAccDetailReportComponent;
  let fixture: ComponentFixture<MpuacBankAccDetailReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccDetailReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccDetailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
