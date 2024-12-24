import { TestBed } from '@angular/core/testing';

import { CsReportsService } from './cs-reports.service';

describe('CsReportsService', () => {
  let service: CsReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
