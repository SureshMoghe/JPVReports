import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingAHLevelLoginComponent } from './grounding-ahlevel-login.component';

describe('GroundingAHLevelLoginComponent', () => {
  let component: GroundingAHLevelLoginComponent;
  let fixture: ComponentFixture<GroundingAHLevelLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingAHLevelLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingAHLevelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
