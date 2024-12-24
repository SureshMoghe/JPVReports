import { TestBed } from '@angular/core/testing';

import { FarmerApprovalService } from './farmer-approval.service';

describe('FarmerApprovalService', () => {
  let service: FarmerApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
