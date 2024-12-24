import { TestBed } from '@angular/core/testing';

import { JdLevelService } from './jd-level.service';

describe('JdLevelService', () => {
  let service: JdLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JdLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
