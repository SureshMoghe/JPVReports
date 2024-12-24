import { TestBed } from '@angular/core/testing';

import { LdmBankWiseService } from './ldm-bank-wise.service';

describe('LdmBankWiseService', () => {
  let service: LdmBankWiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LdmBankWiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
