import { TestBed } from '@angular/core/testing';

import { LandAllotmentService } from './land-allotment.service';

describe('LandAllotmentService', () => {
  let service: LandAllotmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandAllotmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
