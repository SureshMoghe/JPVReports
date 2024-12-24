import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagemeetingAttendanceComponent } from './villagemeeting-attendance.component';

describe('VillagemeetingAttendanceComponent', () => {
  let component: VillagemeetingAttendanceComponent;
  let fixture: ComponentFixture<VillagemeetingAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillagemeetingAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagemeetingAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
