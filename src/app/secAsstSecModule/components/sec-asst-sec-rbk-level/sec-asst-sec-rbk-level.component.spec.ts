import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAsstSecRbkLevelComponent } from './sec-asst-sec-rbk-level.component';

describe('SecAsstSecRbkLevelComponent', () => {
  let component: SecAsstSecRbkLevelComponent;
  let fixture: ComponentFixture<SecAsstSecRbkLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecAsstSecRbkLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAsstSecRbkLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
