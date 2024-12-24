import { TestBed } from '@angular/core/testing';

import { MdacVSsapMilkCollectionService } from './mdac-vssap-milk-collection.service';

describe('MdacVSsapMilkCollectionService', () => {
  let service: MdacVSsapMilkCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdacVSsapMilkCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
