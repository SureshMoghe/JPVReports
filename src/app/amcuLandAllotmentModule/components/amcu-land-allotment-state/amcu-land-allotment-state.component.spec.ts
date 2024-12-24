import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentStateComponent } from './amcu-land-allotment-state.component';

describe('AmcuLandAllotmentStateComponent', () => {
  let component: AmcuLandAllotmentStateComponent;
  let fixture: ComponentFixture<AmcuLandAllotmentStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuLandAllotmentStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuLandAllotmentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
