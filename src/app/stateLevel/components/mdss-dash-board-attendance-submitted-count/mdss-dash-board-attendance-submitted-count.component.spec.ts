import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdssDashBoardAttendanceSubmittedCountComponent } from './mdss-dash-board-attendance-submitted-count.component';

describe('MdssDashBoardAttendanceSubmittedCountComponent', () => {
  let component: MdssDashBoardAttendanceSubmittedCountComponent;
  let fixture: ComponentFixture<MdssDashBoardAttendanceSubmittedCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdssDashBoardAttendanceSubmittedCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdssDashBoardAttendanceSubmittedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
