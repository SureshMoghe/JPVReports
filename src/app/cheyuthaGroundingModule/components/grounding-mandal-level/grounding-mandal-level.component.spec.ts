import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingMandalLevelComponent } from './grounding-mandal-level.component';

describe('GroundingMandalLevelComponent', () => {
  let component: GroundingMandalLevelComponent;
  let fixture: ComponentFixture<GroundingMandalLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingMandalLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingMandalLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
