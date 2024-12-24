import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyedWithoutAnimalscountComponent } from './surveyed-without-animalscount.component';

describe('SurveyedWithoutAnimalscountComponent', () => {
  let component: SurveyedWithoutAnimalscountComponent;
  let fixture: ComponentFixture<SurveyedWithoutAnimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyedWithoutAnimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyedWithoutAnimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
