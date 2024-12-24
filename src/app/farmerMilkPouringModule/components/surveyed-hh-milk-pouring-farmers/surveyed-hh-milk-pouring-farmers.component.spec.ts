import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyedHhMilkPouringFarmersComponent } from './surveyed-hh-milk-pouring-farmers.component';

describe('SurveyedHhMilkPouringFarmersComponent', () => {
  let component: SurveyedHhMilkPouringFarmersComponent;
  let fixture: ComponentFixture<SurveyedHhMilkPouringFarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyedHhMilkPouringFarmersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyedHhMilkPouringFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
