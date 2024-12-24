import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSurvyedcountComponent } from './non-survyedcount.component';

describe('NonSurvyedcountComponent', () => {
  let component: NonSurvyedcountComponent;
  let fixture: ComponentFixture<NonSurvyedcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonSurvyedcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSurvyedcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
