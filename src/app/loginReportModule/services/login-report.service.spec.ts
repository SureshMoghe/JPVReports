import { TestBed } from '@angular/core/testing';

import { LoginReportService } from './login-report.service';

describe('LoginReportService', () => {
  let service: LoginReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
