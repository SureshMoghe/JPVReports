import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalStateReportComponent } from './farmer-approval-state-report.component';

describe('FarmerApprovalStateReportComponent', () => {
  let component: FarmerApprovalStateReportComponent;
  let fixture: ComponentFixture<FarmerApprovalStateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalStateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalStateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
