import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyedWithAnimalscountComponent } from './surveyed-with-animalscount.component';

describe('SurveyedWithAnimalscountComponent', () => {
  let component: SurveyedWithAnimalscountComponent;
  let fixture: ComponentFixture<SurveyedWithAnimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyedWithAnimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyedWithAnimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
