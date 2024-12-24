import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingDetailLevelReportComponent } from './grounding-detail-level-report.component';

describe('GroundingDetailLevelReportComponent', () => {
  let component: GroundingDetailLevelReportComponent;
  let fixture: ComponentFixture<GroundingDetailLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingDetailLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingDetailLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
