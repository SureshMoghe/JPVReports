import { TestBed } from '@angular/core/testing';

import { FarmerMilkPouringService } from './farmer-milk-pouring.service';

describe('FarmerMilkPouringService', () => {
  let service: FarmerMilkPouringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerMilkPouringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
