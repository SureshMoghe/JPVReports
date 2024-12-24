import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingDistrictLevelComponent } from './grounding-district-level.component';

describe('GroundingDistrictLevelComponent', () => {
  let component: GroundingDistrictLevelComponent;
  let fixture: ComponentFixture<GroundingDistrictLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingDistrictLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingDistrictLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
