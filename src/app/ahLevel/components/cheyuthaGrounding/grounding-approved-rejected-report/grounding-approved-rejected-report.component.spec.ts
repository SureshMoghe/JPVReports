import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingApprovedRejectedReportComponent } from './grounding-approved-rejected-report.component';

describe('GroundingApprovedRejectedReportComponent', () => {
  let component: GroundingApprovedRejectedReportComponent;
  let fixture: ComponentFixture<GroundingApprovedRejectedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingApprovedRejectedReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingApprovedRejectedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
