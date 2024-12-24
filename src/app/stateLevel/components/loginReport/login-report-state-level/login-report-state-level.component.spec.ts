import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReportStateLevelComponent } from './login-report-state-level.component';

describe('LoginReportStateLevelComponent', () => {
  let component: LoginReportStateLevelComponent;
  let fixture: ComponentFixture<LoginReportStateLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReportStateLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReportStateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
