import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingMentorComponent } from './village-meeting-mentor.component';

describe('VillageMeetingMentorComponent', () => {
  let component: VillageMeetingMentorComponent;
  let fixture: ComponentFixture<VillageMeetingMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
