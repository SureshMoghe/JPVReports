import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalDistrictReportComponent } from './farmer-approval-district-report.component';

describe('FarmerApprovalDistrictReportComponent', () => {
  let component: FarmerApprovalDistrictReportComponent;
  let fixture: ComponentFixture<FarmerApprovalDistrictReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalDistrictReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalDistrictReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
