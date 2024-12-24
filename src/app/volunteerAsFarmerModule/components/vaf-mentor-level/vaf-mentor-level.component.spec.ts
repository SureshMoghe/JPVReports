import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VafMentorLevelComponent } from './vaf-mentor-level.component';

describe('VafMentorLevelComponent', () => {
  let component: VafMentorLevelComponent;
  let fixture: ComponentFixture<VafMentorLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VafMentorLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VafMentorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
