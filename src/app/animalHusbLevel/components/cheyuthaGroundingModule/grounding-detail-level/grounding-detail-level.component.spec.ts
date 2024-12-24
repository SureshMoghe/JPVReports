import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingDetailLevelComponent } from './grounding-detail-level.component';

describe('GroundingDetailLevelComponent', () => {
  let component: GroundingDetailLevelComponent;
  let fixture: ComponentFixture<GroundingDetailLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingDetailLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingDetailLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
