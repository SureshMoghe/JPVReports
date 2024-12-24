import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingStateComponent } from './village-meeting-state.component';

describe('VillageMeetingStateComponent', () => {
  let component: VillageMeetingStateComponent;
  let fixture: ComponentFixture<VillageMeetingStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
