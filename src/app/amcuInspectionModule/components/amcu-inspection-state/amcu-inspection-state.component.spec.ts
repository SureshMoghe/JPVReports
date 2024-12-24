import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcuInspectionStateComponent } from './amcu-inspection-state.component';

describe('AmcuInspectionStateComponent', () => {
  let component: AmcuInspectionStateComponent;
  let fixture: ComponentFixture<AmcuInspectionStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcuInspectionStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcuInspectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
