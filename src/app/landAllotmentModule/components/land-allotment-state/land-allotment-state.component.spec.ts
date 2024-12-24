import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandAllotmentStateComponent } from './land-allotment-state.component';

describe('LandAllotmentStateComponent', () => {
  let component: LandAllotmentStateComponent;
  let fixture: ComponentFixture<LandAllotmentStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandAllotmentStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandAllotmentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
