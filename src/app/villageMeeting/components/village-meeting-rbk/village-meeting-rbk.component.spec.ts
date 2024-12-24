import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingRbkComponent } from './village-meeting-rbk.component';

describe('VillageMeetingRbkComponent', () => {
  let component: VillageMeetingRbkComponent;
  let fixture: ComponentFixture<VillageMeetingRbkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingRbkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingRbkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
