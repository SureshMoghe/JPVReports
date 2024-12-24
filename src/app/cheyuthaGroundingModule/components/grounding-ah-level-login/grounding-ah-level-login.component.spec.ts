import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundingAhLevelLoginComponent } from './grounding-ah-level-login.component';

describe('GroundingAhLevelLoginComponent', () => {
  let component: GroundingAhLevelLoginComponent;
  let fixture: ComponentFixture<GroundingAhLevelLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundingAhLevelLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundingAhLevelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
