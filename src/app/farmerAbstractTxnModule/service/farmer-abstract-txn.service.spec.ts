import { TestBed } from '@angular/core/testing';

import { FarmerAbstractTxnService } from './farmer-abstract-txn.service';

describe('FarmerAbstractTxnService', () => {
  let service: FarmerAbstractTxnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerAbstractTxnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
