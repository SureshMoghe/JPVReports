import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingPromotersComponent } from './village-meeting-promoters.component';

describe('VillageMeetingPromotersComponent', () => {
  let component: VillageMeetingPromotersComponent;
  let fixture: ComponentFixture<VillageMeetingPromotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingPromotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingPromotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
