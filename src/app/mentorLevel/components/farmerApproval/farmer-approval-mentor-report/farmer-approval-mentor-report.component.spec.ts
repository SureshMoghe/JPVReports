import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalMentorReportComponent } from './farmer-approval-mentor-report.component';

describe('FarmerApprovalMentorReportComponent', () => {
  let component: FarmerApprovalMentorReportComponent;
  let fixture: ComponentFixture<FarmerApprovalMentorReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalMentorReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalMentorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
