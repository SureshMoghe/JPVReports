import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingAttendanceComponent } from './village-meeting-attendance.component';

describe('VillageMeetingAttendanceComponent', () => {
  let component: VillageMeetingAttendanceComponent;
  let fixture: ComponentFixture<VillageMeetingAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
