import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingVillageComponent } from './village-meeting-village.component';

describe('VillageMeetingVillageComponent', () => {
  let component: VillageMeetingVillageComponent;
  let fixture: ComponentFixture<VillageMeetingVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
