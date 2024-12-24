import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingBuildingInspectComponent } from './village-meeting-building-inspect.component';

describe('VillageMeetingBuildingInspectComponent', () => {
  let component: VillageMeetingBuildingInspectComponent;
  let fixture: ComponentFixture<VillageMeetingBuildingInspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingBuildingInspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingBuildingInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
