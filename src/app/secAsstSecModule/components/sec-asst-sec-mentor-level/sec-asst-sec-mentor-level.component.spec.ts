import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecMentorLevelComponent } from './sec-asst-sec-mentor-level.component';

describe('SecAsstSecMentorLevelComponent', () => {
  let component: SecAsstSecMentorLevelComponent;
  let fixture: ComponentFixture<SecAsstSecMentorLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecMentorLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecMentorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
