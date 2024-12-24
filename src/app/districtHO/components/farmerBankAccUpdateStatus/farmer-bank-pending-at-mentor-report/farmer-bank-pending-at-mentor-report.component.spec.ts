import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerBankPendingAtMentorReportComponent } from './farmer-bank-pending-at-mentor-report.component';

describe('FarmerBankPendingAtMentorReportComponent', () => {
  let component: FarmerBankPendingAtMentorReportComponent;
  let fixture: ComponentFixture<FarmerBankPendingAtMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerBankPendingAtMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankPendingAtMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
