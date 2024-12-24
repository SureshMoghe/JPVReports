import { TestBed } from '@angular/core/testing';

import { MandalLevelService } from './mandal-level.service';

describe('MandalLevelService', () => {
  let service: MandalLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandalLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
