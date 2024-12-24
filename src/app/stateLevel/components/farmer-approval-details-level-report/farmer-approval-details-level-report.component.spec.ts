import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalDetailsLevelReportComponent } from './farmer-approval-details-level-report.component';

describe('FarmerApprovalDetailsLevelReportComponent', () => {
  let component: FarmerApprovalDetailsLevelReportComponent;
  let fixture: ComponentFixture<FarmerApprovalDetailsLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalDetailsLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalDetailsLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
