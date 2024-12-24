import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageMeetingSecAndAssSecComponent } from './village-meeting-sec-and-ass-sec.component';

describe('VillageMeetingSecAndAssSecComponent', () => {
  let component: VillageMeetingSecAndAssSecComponent;
  let fixture: ComponentFixture<VillageMeetingSecAndAssSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageMeetingSecAndAssSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillageMeetingSecAndAssSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
