import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyedHhNonMilkPouringFarmersComponent } from './surveyed-hh-non-milk-pouring-farmers.component';

describe('SurveyedHhNonMilkPouringFarmersComponent', () => {
  let component: SurveyedHhNonMilkPouringFarmersComponent;
  let fixture: ComponentFixture<SurveyedHhNonMilkPouringFarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyedHhNonMilkPouringFarmersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyedHhNonMilkPouringFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
