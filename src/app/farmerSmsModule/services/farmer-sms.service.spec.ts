import { TestBed } from '@angular/core/testing';

import { FarmerSmsService } from './farmer-sms.service';

describe('FarmerSmsService', () => {
  let service: FarmerSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
