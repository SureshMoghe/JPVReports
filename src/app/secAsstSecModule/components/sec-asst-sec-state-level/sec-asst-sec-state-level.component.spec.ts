import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecStateLevelComponent } from './sec-asst-sec-state-level.component';

describe('SecAsstSecStateLevelComponent', () => {
  let component: SecAsstSecStateLevelComponent;
  let fixture: ComponentFixture<SecAsstSecStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
