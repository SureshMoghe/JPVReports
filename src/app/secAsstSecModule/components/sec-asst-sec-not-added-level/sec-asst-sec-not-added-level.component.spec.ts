import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecNotAddedLevelComponent } from './sec-asst-sec-not-added-level.component';

describe('SecAsstSecNotAddedLevelComponent', () => {
  let component: SecAsstSecNotAddedLevelComponent;
  let fixture: ComponentFixture<SecAsstSecNotAddedLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecNotAddedLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecNotAddedLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
