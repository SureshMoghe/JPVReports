import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerApprovalVillageLevelReportComponent } from './farmer-approval-village-level-report.component';

describe('FarmerApprovalVillageLevelReportComponent', () => {
  let component: FarmerApprovalVillageLevelReportComponent;
  let fixture: ComponentFixture<FarmerApprovalVillageLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerApprovalVillageLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerApprovalVillageLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
