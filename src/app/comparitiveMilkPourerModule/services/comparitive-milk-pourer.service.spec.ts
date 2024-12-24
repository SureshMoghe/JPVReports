import { TestBed } from '@angular/core/testing';

import { ComparitiveMilkPourerService } from './comparitive-milk-pourer.service';

describe('ComparitiveMilkPourerService', () => {
  let service: ComparitiveMilkPourerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparitiveMilkPourerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
