import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalClusterLevelReportComponent } from './farmer-approval-cluster-level-report.component';

describe('FarmerApprovalClusterLevelReportComponent', () => {
  let component: FarmerApprovalClusterLevelReportComponent;
  let fixture: ComponentFixture<FarmerApprovalClusterLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalClusterLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalClusterLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
