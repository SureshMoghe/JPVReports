import { TestBed } from '@angular/core/testing';

import { LdmBankService } from './ldm-bank.service';

describe('LdmBankService', () => {
  let service: LdmBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LdmBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
