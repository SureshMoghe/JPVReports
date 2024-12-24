import { TestBed } from '@angular/core/testing';

import { CheyuthaGroundingService } from './cheyutha-grounding.service';

describe('CheyuthaGroundingService', () => {
  let service: CheyuthaGroundingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheyuthaGroundingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
