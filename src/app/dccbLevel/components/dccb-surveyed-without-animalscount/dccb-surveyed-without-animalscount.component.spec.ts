import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbSurveyedWithoutAnimalscountComponent } from './dccb-surveyed-without-animalscount.component';

describe('DccbSurveyedWithoutAnimalscountComponent', () => {
  let component: DccbSurveyedWithoutAnimalscountComponent;
  let fixture: ComponentFixture<DccbSurveyedWithoutAnimalscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbSurveyedWithoutAnimalscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbSurveyedWithoutAnimalscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
