import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingInspectionStateComponent } from './building-inspection-state.component';

describe('BuildingInspectionStateComponent', () => {
  let component: BuildingInspectionStateComponent;
  let fixture: ComponentFixture<BuildingInspectionStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingInspectionStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingInspectionStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
