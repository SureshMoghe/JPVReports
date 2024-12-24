import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingMandalLevelReportComponent } from './grounding-mandal-level-report.component';

describe('GroundingMandalLevelReportComponent', () => {
  let component: GroundingMandalLevelReportComponent;
  let fixture: ComponentFixture<GroundingMandalLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingMandalLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingMandalLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
