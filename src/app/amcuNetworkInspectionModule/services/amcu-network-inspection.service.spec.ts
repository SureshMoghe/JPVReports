import { TestBed } from '@angular/core/testing';

import { AmcuNetworkInspectionService } from './amcu-network-inspection.service';

describe('AmcuNetworkInspectionService', () => {
  let service: AmcuNetworkInspectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmcuNetworkInspectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
