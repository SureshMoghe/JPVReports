import { TestBed } from '@angular/core/testing';

import { BmcuConstructionService } from './bmcu-construction.service';

describe('BmcuConstructionService', () => {
  let service: BmcuConstructionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmcuConstructionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
