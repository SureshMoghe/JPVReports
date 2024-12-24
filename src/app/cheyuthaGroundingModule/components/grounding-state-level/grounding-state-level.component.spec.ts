import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingStateLevelComponent } from './grounding-state-level.component';

describe('GroundingStateLevelComponent', () => {
  let component: GroundingStateLevelComponent;
  let fixture: ComponentFixture<GroundingStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
