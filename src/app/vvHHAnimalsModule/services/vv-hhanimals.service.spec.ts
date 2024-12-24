import { TestBed } from '@angular/core/testing';

import { VvHHAnimalsService } from './vv-hhanimals.service';

describe('VvHHAnimalsService', () => {
  let service: VvHHAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VvHHAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
