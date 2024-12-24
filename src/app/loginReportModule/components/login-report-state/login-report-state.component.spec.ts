import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReportStateComponent } from './login-report-state.component';

describe('LoginReportStateComponent', () => {
  let component: LoginReportStateComponent;
  let fixture: ComponentFixture<LoginReportStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReportStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReportStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
