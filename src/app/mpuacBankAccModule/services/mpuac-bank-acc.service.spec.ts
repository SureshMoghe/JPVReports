import { TestBed } from '@angular/core/testing';

import { MpuacBankAccService } from './mpuac-bank-acc.service';

describe('MpuacBankAccService', () => {
  let service: MpuacBankAccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpuacBankAccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
