import { TestBed } from '@angular/core/testing';

import { FarmerNatureOfUnitService } from './farmer-nature-of-unit.service';

describe('FarmerNatureOfUnitService', () => {
  let service: FarmerNatureOfUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerNatureOfUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
