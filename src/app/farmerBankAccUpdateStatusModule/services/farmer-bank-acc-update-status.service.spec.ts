import { TestBed } from '@angular/core/testing';

import { FarmerBankAccUpdateStatusService } from './farmer-bank-acc-update-status.service';

describe('FarmerBankAccUpdateStatusService', () => {
  let service: FarmerBankAccUpdateStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerBankAccUpdateStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
