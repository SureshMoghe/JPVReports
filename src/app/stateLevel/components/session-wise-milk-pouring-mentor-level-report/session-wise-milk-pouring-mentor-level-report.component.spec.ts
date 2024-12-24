import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionWiseMilkPouringMentorLevelReportComponent } from './session-wise-milk-pouring-mentor-level-report.component';

describe('SessionWiseMilkPouringMentorLevelReportComponent', () => {
  let component: SessionWiseMilkPouringMentorLevelReportComponent;
  let fixture: ComponentFixture<SessionWiseMilkPouringMentorLevelReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionWiseMilkPouringMentorLevelReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionWiseMilkPouringMentorLevelReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
