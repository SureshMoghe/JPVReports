import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingFunctionariesComponent } from './village-meeting-functionaries.component';

describe('VillageMeetingFunctionariesComponent', () => {
  let component: VillageMeetingFunctionariesComponent;
  let fixture: ComponentFixture<VillageMeetingFunctionariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingFunctionariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingFunctionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
