import { TestBed } from '@angular/core/testing';

import { AmcuLandAllotmentService } from './amcu-land-allotment.service';

describe('AmcuLandAllotmentService', () => {
  let service: AmcuLandAllotmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmcuLandAllotmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
