import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbSurveyedWithAnimalscountComponent } from './dccb-surveyed-with-animalscount.component';

describe('DccbSurveyedWithAnimalscountComponent', () => {
  let component: DccbSurveyedWithAnimalscountComponent;
  let fixture: ComponentFixture<DccbSurveyedWithAnimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbSurveyedWithAnimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbSurveyedWithAnimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
