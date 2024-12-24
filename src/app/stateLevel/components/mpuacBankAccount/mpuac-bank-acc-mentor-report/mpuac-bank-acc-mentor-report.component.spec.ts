import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpuacBankAccMentorReportComponent } from './mpuac-bank-acc-mentor-report.component';

describe('MpuacBankAccMentorReportComponent', () => {
  let component: MpuacBankAccMentorReportComponent;
  let fixture: ComponentFixture<MpuacBankAccMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpuacBankAccMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpuacBankAccMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
