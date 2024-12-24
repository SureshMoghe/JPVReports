import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdSurveyComponent } from './household-survey.component';

describe('HouseholdSurveyComponent', () => {
  let component: HouseholdSurveyComponent;
  let fixture: ComponentFixture<HouseholdSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
