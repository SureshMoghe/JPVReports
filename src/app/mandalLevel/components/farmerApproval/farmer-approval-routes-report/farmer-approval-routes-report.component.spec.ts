import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalRoutesReportComponent } from './farmer-approval-routes-report.component';

describe('FarmerApprovalRoutesReportComponent', () => {
  let component: FarmerApprovalRoutesReportComponent;
  let fixture: ComponentFixture<FarmerApprovalRoutesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalRoutesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalRoutesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
