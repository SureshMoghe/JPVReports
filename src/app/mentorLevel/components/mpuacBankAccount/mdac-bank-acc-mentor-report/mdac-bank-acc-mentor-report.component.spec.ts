import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdacBankAccMentorReportComponent } from './mdac-bank-acc-mentor-report.component';

describe('MdacBankAccMentorReportComponent', () => {
  let component: MdacBankAccMentorReportComponent;
  let fixture: ComponentFixture<MdacBankAccMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdacBankAccMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdacBankAccMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
