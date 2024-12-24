import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringMentorLevelDetailsComponent } from './session-wise-milk-pouring-mentor-level-details.component';

describe('SessionWiseMilkPouringMentorLevelDetailsComponent', () => {
  let component: SessionWiseMilkPouringMentorLevelDetailsComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringMentorLevelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringMentorLevelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringMentorLevelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
