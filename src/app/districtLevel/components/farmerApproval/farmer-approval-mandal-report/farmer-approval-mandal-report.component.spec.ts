import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalMandalReportComponent } from './farmer-approval-mandal-report.component';

describe('FarmerApprovalMandalReportComponent', () => {
  let component: FarmerApprovalMandalReportComponent;
  let fixture: ComponentFixture<FarmerApprovalMandalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalMandalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalMandalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
