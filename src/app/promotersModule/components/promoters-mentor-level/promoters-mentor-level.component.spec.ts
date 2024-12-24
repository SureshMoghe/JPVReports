import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotersMentorLevelComponent } from './promoters-mentor-level.component';

describe('PromotersMentorLevelComponent', () => {
  let component: PromotersMentorLevelComponent;
  let fixture: ComponentFixture<PromotersMentorLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotersMentorLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotersMentorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
