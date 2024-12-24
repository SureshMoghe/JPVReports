import { TestBed } from '@angular/core/testing';

import { AmcuInspectionService } from './amcu-inspection.service';

describe('AmcuInspectionService', () => {
  let service: AmcuInspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmcuInspectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
