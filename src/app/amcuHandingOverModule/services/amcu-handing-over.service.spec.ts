import { TestBed } from '@angular/core/testing';

import { AmcuHandingOverService } from './amcu-handing-over.service';

describe('AmcuHandingOverService', () => {
  let service: AmcuHandingOverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmcuHandingOverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
