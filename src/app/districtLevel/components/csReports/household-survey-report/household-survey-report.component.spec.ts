import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdSurveyReportComponent } from './household-survey-report.component';

describe('HouseholdSurveyReportComponent', () => {
  let component: HouseholdSurveyReportComponent;
  let fixture: ComponentFixture<HouseholdSurveyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdSurveyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdSurveyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
