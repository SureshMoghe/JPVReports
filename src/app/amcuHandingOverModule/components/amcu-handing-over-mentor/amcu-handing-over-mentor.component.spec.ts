import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuHandingOverMentorComponent } from './amcu-handing-over-mentor.component';

describe('AmcuHandingOverMentorComponent', () => {
  let component: AmcuHandingOverMentorComponent;
  let fixture: ComponentFixture<AmcuHandingOverMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuHandingOverMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuHandingOverMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
