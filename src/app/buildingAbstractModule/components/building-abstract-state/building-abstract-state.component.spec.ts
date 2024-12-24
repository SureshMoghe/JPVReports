import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAbstractStateComponent } from './building-abstract-state.component';

describe('BuildingAbstractStateComponent', () => {
  let component: BuildingAbstractStateComponent;
  let fixture: ComponentFixture<BuildingAbstractStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAbstractStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingAbstractStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
