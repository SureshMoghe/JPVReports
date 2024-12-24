import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingStateLevelReportComponent } from './grounding-state-level-report.component';

describe('GroundingStateLevelReportComponent', () => {
  let component: GroundingStateLevelReportComponent;
  let fixture: ComponentFixture<GroundingStateLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingStateLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingStateLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
