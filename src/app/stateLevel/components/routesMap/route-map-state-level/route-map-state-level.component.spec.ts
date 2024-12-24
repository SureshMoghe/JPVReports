import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMapStateLevelComponent } from './route-map-state-level.component';

describe('RouteMapStateLevelComponent', () => {
  let component: RouteMapStateLevelComponent;
  let fixture: ComponentFixture<RouteMapStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteMapStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMapStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
