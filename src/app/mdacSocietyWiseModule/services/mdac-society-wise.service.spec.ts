import { TestBed } from '@angular/core/testing';

import { MdacSocietyWiseService } from './mdac-society-wise.service';

describe('MdacSocietyWiseService', () => {
  let service: MdacSocietyWiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdacSocietyWiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
