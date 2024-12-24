import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DccbNonSurvyedcountComponent } from './dccb-non-survyedcount.component';

describe('DccbNonSurvyedcountComponent', () => {
  let component: DccbNonSurvyedcountComponent;
  let fixture: ComponentFixture<DccbNonSurvyedcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DccbNonSurvyedcountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DccbNonSurvyedcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
