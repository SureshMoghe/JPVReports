import { TestBed } from '@angular/core/testing';

import { FarmerSchemeService } from './farmer-scheme.service';

describe('FarmerSchemeService', () => {
  let service: FarmerSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
