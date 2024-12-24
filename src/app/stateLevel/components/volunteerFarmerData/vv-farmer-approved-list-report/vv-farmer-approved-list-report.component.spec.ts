import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VvFarmerApprovedListReportComponent } from './vv-farmer-approved-list-report.component';

describe('VvFarmerApprovedListReportComponent', () => {
  let component: VvFarmerApprovedListReportComponent;
  let fixture: ComponentFixture<VvFarmerApprovedListReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VvFarmerApprovedListReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VvFarmerApprovedListReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
